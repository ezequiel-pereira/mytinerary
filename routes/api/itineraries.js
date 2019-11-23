const express = require('express')
const router = express.Router()
const cors = require('cors')

const itineraryModel = require('../../models/Itinerary.js');

router.get('/itinerary/:name', cors(), async (req, res) => {
	let cityRequested = req.params.name
	itineraryModel.find({city: cityRequested})
	.then(itineraries => {
		res.json(itineraries)
		//res.json({msg: 'This is CORS-enabled for a Single Route'})
	})
});

router.post('/itinerary/add', (req, res) => {
    
	let newItinerary = new itineraryModel ({
		
	});

	newItinerary.save().then(city => res.json(city))
}); 

module.exports = router