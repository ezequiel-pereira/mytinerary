const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const passport = require('passport')
const path = require('path')
const cors = require('cors')

//db config
const db = require('./keys.js').mongoURI;

//routes
const cities = require('./routes/api/cities')
const itineraries = require('./routes/api/itineraries')
const activities = require('./routes/api/activities')
const users = require('./routes/api/register')
const auth = require('./routes/api/auth')
const favourites = require('./routes/api/favourites')

const app = express()

//passport middleware
app.use(passport.initialize());

app.use(cors());

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/', cities)
app.use('/', itineraries)
app.use('/', activities)
app.use('/', users)
app.use('/', auth)
app.use('/', favourites)

//Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    //Set statis folder
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
.then(console.log('Database conected'))
.catch(err => console.log(err))

app.listen(5000, function() {console.log('Listening on port 5000');})