const express = require('express')
const router = express.Router()
const cors = require('cors')
const passport = require('../../passport')

const bcrypt = require('bcrypt')
const saltRounds = 10

const { check, validationResult } = require('express-validator')

const userModel = require('../../models/User')

const key = require('../../keys.js').secretOrKey
const jwt = require('jsonwebtoken')

router.post('/user/add', cors(), [
	check('username').isAlphanumeric().withMessage('Username must be alphanumeric'),
	check('email').isEmail().withMessage('Invalid email'),
	check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
	],
	(req, res) => {

	const newUser = new userModel ({
		username: req.body.username,
		email: req.body.email,
		password: req.body.password,
		profilePic: req.body.profilePic
	});

	bcrypt.hash(req.body.password, saltRounds, function (error, hash){

		if(error) throw error

		newUser.password = hash
	
		newUser.save().then(user => res.json(user))
		.then(user => {
			res.json(user.username)
			res.redirect('/login')
		}).catch(e => console.log(e))
	})
	
	const errors = validationResult(req)
	if (!errors.isEmpty()) {
		return res.status(422).json({ errors: errors.array() })
	}
});

router.post('/user/login', cors(), (req, res) => {
	userModel.findOne({email: req.body.email})
	.then(user =>
		bcrypt.compare(req.body.password, user.password, function(err){
			if (!err) {
				jwt.sign(
					{id: user._id},
					key,
					{expiresIn: 2592000},
					(err, token) => {
					  if(err){
						res.json({
						  success: false,
						  token: "There was an error"
						});
					  }else {
						res.json({
						  success: true,
						  token: token
						});
					  }
					}
				  );
			} else {
				res.send('Error')
				/* res.redirect('/login') */
			}
		})
	).catch(e => console.log(e))
});

router.get("/test", passport.authenticate("jwt", { session: false }), (req, res) => {
	userModel
	.findOne({ _id: req.user.id })
	.then(user => {
		res.json(user);
	})
	.catch(err => res.status(404).json({ error: "User does not exist!" }));
	}
);
	
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