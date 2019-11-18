const express = require('express')
const router = express.Router()
const cors = require('cors')

const cityModel = require('../../models/City.js');
//const itineraryModel = require('../../models/Itinerary.js');

router.get('/city/all', cors(), async (req, res) => {
    
	cityModel.find({})
	.then(cities => {
		res.json(cities)
		res.json({msg: 'This is CORS-enabled for a Single Route'})
	})
});

router.post('/city/add', (req, res) => {
    
	let newCity = new cityModel ({
		name: req.body.name,
		country: req.body.country
	});

	newCity.save().then(city => res.json(city))
}); 

module.exports = router