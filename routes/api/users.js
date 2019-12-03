const express = require('express')
const router = express.Router()
const cors = require('cors')
const { check, validationResult } = require('express-validator')

const userModel = require('../../models/User.js');

router.post('/user/add', cors(), [
	check('username').isAlphanumeric().withMessage('Username must be alphanumeric'),
	check('email').isEmail().withMessage('Invalid email'),
	check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),

	],
	(req, res) => {

	console.log("user route");
	
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(422).json({ errors: errors.array() });
	}
    
	const newUser = new userModel ({
		username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        profilePic: req.body.profilePic
	});

	newUser.save().then(user => res.json(user))
}); 

/* router.get('/user/:itineraryId', cors(), async (req, res) => {
	let itineraryId = req.params.itineraryId
	console.log("route   " + itineraryId);
	
	userModel.find({itinerary: itineraryId})
	populate("itinerary")
	.then(user => {
		res.json(user)
		console.log(user)
		res.json({msg: 'This is CORS-enabled for a Single Route'})
	})
});

router.get('/user/cargar', (req, res) => {
	const data = require('../../activitiesdta')
    console.log('data', data);
	
	userModel.insertMany(data).then(itinerary => res.json(itinerary))
});*/

module.exports = router 