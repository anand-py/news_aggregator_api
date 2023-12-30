const mongoose = require('mongoose');
const ObjectId = require('mongodb').ObjectId;
const Schema = mongoose.Schema;

var userSchema = new Schema({
  _id: {
    type: mongoose.Types.ObjectId,
    auto: true,
  },
  username: {
    type: String,
    required: [true, "User Name not provided"]
  },
  email: {
    type: String,
    required: [true, "Email not provided"],
    lowercase: true,
    trim: true,
    unique: [true, "Email already exist in the database"],
    validate: {
      validator: function(v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: "Email is not valid!"
    }
  },
  password: {
    type: String,
    required: [true, "password not provided"]
  },
  preferences: {
    type: String,
    required: [true, "preferences not provided"]
  },
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Userall", userSchema);