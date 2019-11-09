const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const db = require('./keys.js').mongoURI;

const api = require('./routes/api/cities.js')

const app = express();

app.use('/', api)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
.then(console.log('Database conected'))
.catch(err => console.log(err))

app.listen(5000, function() {console.log('Listening on port 5000');})
