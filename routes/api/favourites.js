const express = require('express')
const router = express.Router()
const passport = require('../../passport')

const userModel = require('../../models/User')

router.post('/favourite/add', /* passport.authenticate("jwt", { session: false }), */ (req, res) => {
	userModel.findOne({_id: req.body.userId})
	.then(user => {
		user.favourites.push(req.body.itineraryId)
		user.save()

		res.json(user)

	}).catch(e => console.log(e))
})

router.get('/favourites', /* passport.authenticate("jwt", { session: false }), */ (req, res) => {
	userModel.findOne({_id: req.body.userId})
	.then(user => {
		res.json(user.favourites)
	}).catch(e => console.log(e))
})

module.exports = router