const express = require('express')
const router = express.Router()
const cors = require('cors')

const cityModel = require('../../models/City.js');

router.get('/city/all', cors(), async (req, res) => {
    
	cityModel.find({})
	.then(cities => {
		res.json(cities)
	})
});

router.get('/city/:id', cors(), async (req, res) => {
	let cityId = req.params.id
	cityModel.findOne({_id: cityId})
	.then(city => {
		res.json(city)
	})
});

router.post('/city/add', (req, res) => {
    
	const newCity = new cityModel (
		{
			name: req.body.name,
			country: req.body.country
		}
	);

	newCity.save()
	.then(city => res.json(city))
	.catch(err => res.status(500).send("Server error"))

});

module.exports = router