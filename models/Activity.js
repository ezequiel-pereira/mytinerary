 // Define schema
 const mongoose = require('mongoose');
 var Schema = mongoose.Schema;
 
 const activitySchema = new Schema({
   name: String,
   address: String,
   image: String,
   rating: Number,
   price: Number,
   comment: String
 });
 
 // Compile model from schema
 module.exports = mongoose.model('Activity', activitySchema);