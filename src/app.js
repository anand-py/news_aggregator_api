// Import required packages
const bodyParser = require("body-parser");
const express = require("express");


// Initialize Express
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser)

// Start the server
app.listen(PORT,(err)=>{
    if(err){
        console.log("Some error encounter")
    }else{
        console.log(`Server is running on ${PORT}`)
    }
})