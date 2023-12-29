const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000;


app.listen(PORT,(err)=>{
    if(err){
        console.log("Some error encounter")
    }else{
        console.log(`Server is running on ${PORT}`)
    }
})