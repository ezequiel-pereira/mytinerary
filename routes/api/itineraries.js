const express = require('express')
const router = express.Router()
const passport = require('../../passport')

const itineraryModel = require('../../models/Itinerary.js');

router.get('/itinerary/:cityId', /* passport.authenticate("jwt", { session: false, failureRedirect: '/login' }), */ async (req, res) => {
	let cityId = req.params.cityId
	itineraryModel.find({city: cityId})
	.populate("activity")
	.then(itineraries => {
		res.json(itineraries)
	})
})

/* router.post('/itinerary/add', (req, res) => {
    
	let newItinerary = new itineraryModel ({
		title: req.body.title,
		profilePic: req.body.profilePic,
		rating: req.body.rating,
		duration: req.body.duration,
		price: req.body.price,
		hashtags: req.body.hashtags
	});

	newItinerary.save(itineraries).then(itinerary => res.json(itinerary))
});  */

/* router.get('/itinerary/add/all', (req, res) => {
	const data = require('../../itinerariesdata')
    console.log('data', data);
	
	itineraryModel.insertMany(data).then(itinerary => res.json(itinerary))
});  */

module.exports = router