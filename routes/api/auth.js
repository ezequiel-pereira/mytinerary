const express = require('express')
const router = express.Router()
const passport = require('../../passport')

const userModel = require('../../models/User')

const key = require('../../keys.js').secretOrKey
const jwt = require('jsonwebtoken')

router.get('/auth/google',
    /* (req, res) => { res.send('google login') }, */
    passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    userModel.findOne({email: req.body.email})
    .then(user =>
      jwt.sign(
        {id: req.body.id},
        key,
        {expiresIn: 2592000},
        (err, token) => {
          if(err){
          res.json({
            success: false,
            token: "There was an error"
          });
          }else {
            // Successful authentication, redirect home.
            res.redirect('http://localhost:3000/home/' + token)
          }
        })
    ).catch(e => console.log(e))
  }
);

module.exports = router 