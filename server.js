const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cityModel = require('./City.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb+srv://admin:1234@mytinerary-muhl3.mongodb.net/cities?retryWrites=true&w=majority')
.then(() => console.log('Mongoose conected...'))
.catch(err => console.log(err))

app.listen(5000, function() {console.log('Listening on port 5000...');})

app.get('/city/all', (req, res) => {
	
	cityModel.find()
	.then(cities => res.json(cities))
 
});

app.post('/city/add', (req, res) => {
    
	var newCity = new cityModel ({
		city: req.body.city,
		country: req.body.country
	});

	newCity.save().then(city => res.json(city))
});
