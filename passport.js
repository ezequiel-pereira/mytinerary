const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const userModel = require('./models/User')
const keys = require('./keys.js')
const passport = require('passport')


//Options object
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey

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

//Google strategy
var GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser((user,cb) => cb(null, user))

passport.deserializeUser((id,cb) => {
  
  userModel.findById(id)
  .then(user => cb(null, user))
  cb(null, user)
})

passport.use(new GoogleStrategy(
  {
    clientID: keys.GOOGLE_CLIENT_ID,
    clientSecret: keys.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {      
    userModel.findOne({ email: profile._json.email })
    .then(user => {
      if (!user) {
        console.log('New user');

        const newUser = new userModel({
          googleId: profile._json.sub,
          first_name: profile._json.given_name,
          last_name: profile._json.family_name,
          profilePic: profile._json.picture,
          email: profile._json.email
        })

        newUser.save()

        cb(null, newUser)

        .then(user => console.log(user))
        .catch(e => console.log(e))
      } else {
        console.log('El usuario ya existe');
        cb(null, user)
      }
    }),
    function (err, user) {
      return cb(err, user);
    }
  }
));
