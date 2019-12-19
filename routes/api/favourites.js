const express = require('express')
const router = express.Router()
const passport = require('../../passport')

const userModel = require('../../models/User')

router.post('/favourite/add', /* passport.authenticate("jwt", { session: false }), */ (req, res) => {
	console.log(req);
	userModel.findOne({user: req.body.user})
	.then(user => {
		console.log('user BD ' + user);
		res.json(user)
	}).catch(e => console.log(e))
})

router.get('/favourites', /* passport.authenticate("jwt", { session: false }), */ (req, res) => {
	console.log(req);
	userModel.findOne({user: req.body.user})
	.then(user => {
		console.log('user BD ' + user);
		res.json(user)
	}).catch(e => console.log(e))
})

router.get("/test", passport.authenticate("jwt", { session: false }), (req, res) => {
	userModel
	.findOne({ _id: req.user.id })
	.then(user => {
		res.json(user);
	})
	.catch(err => res.status(404).json({ error: "User does not exist!" }));
	}
);

module.exports = router