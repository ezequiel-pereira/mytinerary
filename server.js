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
const mongoose = require('mongoose');
const bodyParser= require('body-parser')
const cityModel = require('./City.js')

app.listen(5000, function() {
	console.log('listening on 5000');
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb+srv://admin:1234@mytinerary-muhl3.mongodb.net/cities?retryWrites=true&w=majority');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

/* app.post('/city/add', (req, res, next) => {
    
	var name = {
		city: req.body.city,
		country: req.body.country
	};

	db.collection("cities").save(name, (err, result) => {
		if(err) {
			console.log(err);
		}

		res.send('city added successfully');
	});
});*/

app.get('/city/all', (req, res, next) => {

	/* if(err) {
		throw err;
	}
 */
	let id = req.params.id;
	db.collection('cities').find({}).toArray( (err, result) => {

		/* if(err) {
			throw err;
		} */

		res.send(result);
	});
});