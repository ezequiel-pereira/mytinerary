 // Define schema
const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var City = new Schema({
  city: String,
	country: String
});

// Compile model from schema
module.exports = mongoose.model('City', City );