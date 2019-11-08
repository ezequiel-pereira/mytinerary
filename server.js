const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cityModel = require('./City.js');
const cors = require('cors')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb+srv://admin:1234@mytinerary-muhl3.mongodb.net/mytinerary?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
.then(console.log('Mongoose conected...'))
.catch(err => console.log(err))

app.listen(5000, function() {console.log('Listening on port 5000...');})

app.get('/city/all', cors(), async (req, res) => {

	cityModel.find({}, (err, respuesta) =>{
		if(err) return err;

		res.send(respuesta);
		console.log({msg: 'This is CORS-enabled for a Single Route'})
		console.log(respuesta);
	});

	// res.json({msg: 'This is CORS-enabled for a Single Route'})
	// cityModel.find({})
	// .then(cities => {
	// 	res.json(cities)
	// 	console.log(cities);
	// })
});

app.post('/city/add', (req, res) => {
    
	let newCity = new cityModel ({
		city: req.body.city,
		country: req.body.country
	});

	newCity.save().then(city => res.json(city))
});
