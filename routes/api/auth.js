const express = require('express')
const router = express.Router()
const passport = require('../../passport')

const key = require('../../keys.js').secretOrKey
const jwt = require('jsonwebtoken')

router.get('/auth/google',
    /* (req, res) => { res.send('google login') }, */
    passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: 'http://localhost:3000/login' }),
  function(req, res) {
    console.log(req.user);
      jwt.sign(
        {
          id: req.user._id,
          email: req.user.email,
          first_name: req.user.first_name,
          last_name: req.user.last_name,
          profilePic: req.user.profilePic
        },
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
  }
);

module.exports = router 