const express = require('express')
const router = express.Router()
const cors = require('cors')

const cityModel = require('../../models/City.js');

router.get('/city/all', cors(), async (req, res) => {

	/*cityModel.find({}, (err, res) =>{
		 if(err) return err;

		//res.send(res);
		console.log({msg: 'This is CORS-enabled for a Single Route'})
		console.log(res);
    }); */
    
	cityModel.find({})
	.then(cities => {
    res.json(cities)
    res.json({msg: 'This is CORS-enabled for a Single Route'})
	console.log(cities);
	})
});

router.post('/city/add', (req, res) => {
    
	let newCity = new cityModel ({
		city: req.body.city,
		country: req.body.country
	});

	newCity.save().then(city => res.json(city))
});

module.exports = router