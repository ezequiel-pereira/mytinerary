const express = require('express')
const router = express.Router()
const cors = require('cors')

const activityModel = require('../../models/Activity.js');

router.get('/activity/:name', cors(), async (req, res) => {
	let cityRequested = req.params.name
	activityModel.find({city: cityRequested})
	.then(activity => {
		res.json(activity)
		//res.json({msg: 'This is CORS-enabled for a Single Route'})
	})
});

router.post('/activity/add', (req, res) => {
    
	let newActivity = new activityModel ({
		title: req.body.title,
		profilePic: req.body.profilePic,
		rating: req.body.rating,
		duration: req.body.duration,
		price: req.body.price,
		hashtags: req.body.hashtags
	});

	newActivity.save().then(activity => res.json(activity))
}); 

router.get('/activity/cargar', (req, res) => {
	const data = require('../../activitiesdta')
    console.log('data', data);
	
	activityModel.insertMany(data).then(itinerary => res.json(itinerary))
}); 

module.exports = router