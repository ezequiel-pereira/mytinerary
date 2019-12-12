 // Define schema
 const mongoose = require('mongoose');
 var Schema = mongoose.Schema;
 
 const userSchema = new Schema({
   googleId: String,
   username: String,
   email: String,
   password: String,
   profilePic: String,
   first_name: String,
   last_name: String
 });
 
 // Compile model from schema
 module.exports = mongoose.model('User', userSchema);