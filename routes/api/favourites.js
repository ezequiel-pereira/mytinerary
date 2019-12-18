const express = require('express')
const router = express.Router()
const passport = require('../../passport')

const userModel = require('../../models/User')

router.post('/favorite/add', passport.authenticate("jwt", { session: false }), (req, res) => {
	userModel.findOne({email: req.body.email})
	.then(user => {
		
		})
	}
	).catch(e => console.log(e))
	
    



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