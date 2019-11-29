 // Define schema
 const mongoose = require('mongoose');
 var Schema = mongoose.Schema;
 
 const activitySchema = new Schema({
   name: String,
   itinerary: {type: Schema.Types.ObjectId, ref: "Itinerary"}
 });
 
 // Compile model from schema
 module.exports = mongoose.model('Activity', activitySchema);