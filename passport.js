const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const userModel = require('./models/User')
const key = require('./keys.js').secretOrKey
const passport = require('passport')

//options object
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey= key;

//JWT strategy
module.exports = passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
        userModel.findById(jwt_payload.id)
        .then(user => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );