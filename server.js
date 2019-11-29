const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const db = require('./keys.js').mongoURI;

const cities = require('./routes/api/cities.js')
const itineraries = require('./routes/api/itineraries.js')
const activities = require('./routes/api/activities.js')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', cities)
app.use('/', itineraries)
app.use('/', activities)

mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
.then(console.log('Database conected'))
.catch(err => console.log(err))

app.listen(5000, function() {console.log('Listening on port 5000');})