const mongoose = require('mongoose');
var Schema = mongoose.Schema;
 
const itinerarySchema = new Schema({
    title: String,
    profilePic: String,
    rating: Number,
    duration: Number,
    price: Number,
    hashtags: Array
});

module.exports = mongoose.model('Itinerary', itinerarySchema);