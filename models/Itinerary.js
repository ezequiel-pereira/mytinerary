const mongoose = require('mongoose');
var Schema = mongoose.Schema;
 
const itinerarySchema = new Schema({
    title: String,
    userName: String,
    profilePic: String,
    rating: Number,
    duration: Number,
    price: String,
    hashtags: Array,
    city: {type: Schema.Types.ObjectId, ref: "City"},
    activity: [{type: Schema.Types.ObjectId, ref: "Activity"}]
});

module.exports = mongoose.model('Itinerary', itinerarySchema, 'itineraries');