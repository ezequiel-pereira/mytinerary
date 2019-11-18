const express = require('express')
const router = express.Router()
const cors = require('cors')

const itineraryModel = require('../../models/Itinerary.js');

router.get('/itinerary/all', cors(), async (req, res) => {
	itineraryModel.find({})
	.then(itinerary => {
		res.json(itinerary)
		res.json({msg: 'This is CORS-enabled for a Single Route'})
	})
});

router.post('/itinerary/add', (req, res) => {
    
	let newItinerary = new itineraryModel ({
		
	});

	newItinerary.save().then(city => res.json(city))
}); 

module.exports = router