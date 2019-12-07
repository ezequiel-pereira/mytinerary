const express = require('express')
const router = express.Router()
const passport = require('../../passport')
const userModel = require('../../models/User')
require('../../passport')

router.get('/auth/google',
    /* (req, res) => { res.send('google login') }, */
    passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.send('funciona')
    /* res.redirect('/home'); */
  }
);

module.exports = router 