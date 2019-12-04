 // Define schema
 const mongoose = require('mongoose');
 var Schema = mongoose.Schema;
 
 const useSchema = new Schema({
   username: String,
   email: String,
   password: String,
   profilePic: String
 });
 
 // Compile model from schema
 module.exports = mongoose.model('User', useSchema);