// Import required packages

const express = require("express");
const bodyParser = require("body-parser");
const routes = require("express").Router();
const authRoutes = require("../src/routes/authRoutes")
require('dotenv').config();
const connectDb = require("../src/config/db.connection")


connectDb()

// Initialize Express
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json())

// Routes
app.use('/api', authRoutes);
app.use('/api', newsRoutes);

// Start the server
app.listen(PORT,(err)=>{
    if(err){
        console.log("Some error encounter")
    }else{
        console.log(`Server is running on ${PORT}`)
    }
})