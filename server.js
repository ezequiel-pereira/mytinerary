/* // BASE SETUP
// ==============================================

var express = require('express');
var app     = express();
var port    =   process.env.PORT || 5000;

// ROUTES
// ==============================================

app.get('/', function(req, res) {
    res.send('home');
});

app.get('/test', function(req, res) {
	res.send('HELLO WORLD');
});

// START THE SERVER
// ==============================================
app.listen(port);
console.log('Magic happens on port ' + port); */

const express = require('express');
const app = express();
const db = require('mongoose');
const bodyParser= require('body-parser');
const CityModel = require('./City.js');

app.listen(5000, function() {
	console.log('listening on 5000');
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

db.connect('mongodb+srv://admin:1234@mytinerary-muhl3.mongodb.net/cities?retryWrites=true&w=majority');


app.post('/city/add', (req, res, next) => {
		
	let city = new CityModel ({
		city: req.body.city,
		country: req.body.country 
	})


	city.save()
	.then(doc => {
		console.log(doc)
	})
	.catch(err => {
		console.error(err)
	})

	res.send('city added successfully');
	
});

app.get('/city/all', (req, res) => {
	
	CityModel
  .find({
    city: 'Barcelona'   // search query
  })
  .then(doc => {
    console.log(doc)
  })
  .catch(err => {
    console.error(err)
  })
});