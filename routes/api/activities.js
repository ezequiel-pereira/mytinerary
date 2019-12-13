const express = require('express')
const router = express.Router()
const passport = require('../../passport')

const activityModel = require('../../models/Activity.js');

router.get('/activity/:itineraryId', async (req, res) => {
	let itineraryId = req.params.itineraryId
	console.log("route   " + itineraryId);
	
	activityModel.find({itinerary: itineraryId})
	/* populate("itinerary") */
	.then(activity => {
		res.json(activity)
		console.log(activity)
		res.json({msg: 'This is CORS-enabled for a Single Route'})
	})
});

router.post('/activity/add', passport.authenticate("jwt", { session: false, failureRedirect: '/login' }), (req, res) => {
    
	let newActivity = new activityModel ({
		name: req.body.name,
		itinerary: req.body.itinerary
	});

	newActivity.save().then(activity => res.json(activity))
}); 

/* router.get('/activity/cargar', (req, res) => {
	const data = require('../../activitiesdta')
    console.log('data', data);
	
	activityModel.insertMany(data).then(itinerary => res.json(itinerary))
});  */

module.exports = router