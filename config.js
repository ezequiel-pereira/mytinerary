require('dotenv').config();

module.exports = {
    mongoURI: process.env.MONGO_URI,
    secretOrKey: process.env.JWT_SECRET,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
};
