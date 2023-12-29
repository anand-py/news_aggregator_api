const mongoose = require("mongoose");
require('dotenv').config();

const connectDb = async () => {
  // Connection to the DB
try {
    mongoose.connect("mongodb+srv://admin:admin@anandcluster.fxsvvdn.mongodb.net/news-api-backend?retryWrites=true&w=majority" , {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
    console.log("Connection to db is successfull.");
  }catch (err) {
    console.log("Error while connecting to the DB.");
  }
};

module.exports = connectDb;