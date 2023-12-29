require('dotenv').config();

const {
    PORT,
    CONNECTION_STRING,
    SECERET_KEY
} = process.env;

module.exports = {PORT,CONNECTION_STRING, SECERET_KEY}
