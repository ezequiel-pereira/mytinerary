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

module.exports = passport.use(new GoogleStrategy(
  {
    clientID: keys.GOOGLE_CLIENT_ID,
    clientSecret: keys.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    /* let email =  profile.emails
    profile.emails.forEach(email => emails.push(email.value) */
      
    userModel.findOne({ email: profile._json.email })
    .then(user => {
      if (!user) {
        console.log('ififififififif');
        
        userModel.save({
          googleId: profile._json.sub,
          first_name: profile._json.given_name,
          last_name: profile._json.family_name,
          profilePic: profile._json.picture,
          email: profile._json.email
        })
      }
    })
  }
));

/* {
        id: '101411363007172779817',
        displayName: 'Ezequiel Pereira',
        name: { familyName: 'Pereira', givenName: 'Ezequiel' },
        emails: [ { value: 'ezequielpereira92@gmail.com', verified: true } ],
        photos: [
          {
            value: 'https://lh5.googleusercontent.com/-ParY5ew2TXs/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rd16jUasr4dJrtXbg826mW1r3pTsQ/photo.jpg'
          }
        ],
        provider: 'google',
        _raw: '{\n' +
          '  "sub": "101411363007172779817",\n' +
          '  "name": "Ezequiel Pereira",\n' +
          '  "given_name": "Ezequiel",\n' +
          '  "family_name": "Pereira",\n' +
          '  "picture": "https://lh5.googleusercontent.com/-ParY5ew2TXs/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rd16jUasr4dJrtXbg826mW1r3pTsQ/photo.jpg",\n' +
          '  "email": "ezequielpereira92@gmail.com",\n' +
          '  "email_verified": true,\n' +
          '  "locale": "es-419"\n' +
          '}',
        _json: {
          sub: '101411363007172779817',
          name: 'Ezequiel Pereira',
          given_name: 'Ezequiel',
          family_name: 'Pereira',
          picture: 'https://lh5.googleusercontent.com/-ParY5ew2TXs/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rd16jUasr4dJrtXbg826mW1r3pTsQ/photo.jpg',
          email: 'ezequielpereira92@gmail.com',
          email_verified: true,
          locale: 'es-419'
        }
      [0] } */