const asyncHandler = require("express-async-handler");
const users = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const TOKEN = require("../config/env.config")

//@desc Register a user
//@route POST /api/register
//@access public
const registerUser = asyncHandler(async(req,res) =>{
    const {username, email, password, preferences} = req.body;
    if(!username || !email || !password || !preferences){
        res.status(400)
        throw new Error("All fields are mandatory!")
    }
    // check for existing user
    const existingUser = await users.findOne({email});
    if(existingUser){
        res.status(400)
        throw new Error("Email already exist")
    }
    //Hashed  Password
    const hashedPassword = await bcrypt.hash(password, 10)

    //create New User
    console.log("hashed Password is : ", hashedPassword)
    const newUser = await users.create({
        username,
        email,
        password:  hashedPassword,
        preferences 
    })
    newUser.save();
    console.log(`User created ${newUser}`);
    res.status(200).json({ message: "User Register Successfully" })
})

//@desc login a user.
//@route POST /api/login
//@access public
const loginUser = asyncHandler(async(req,res) =>{
    const {email, password} = req.body;
    if(!email || !password){
        res.status(400)
        throw new Error("All fields are mandatory!")
    }
    // check if user is exist
    const compareUser = await users.findOne({email})
    if(!compareUser){
        res.status(400)
        throw new Error("Email not found")
    } 

    //  Validate password and generate JWT token
    if(compareUser && await bcrypt.compare(req.body.password, compareUser.password)){
        const accessToken = jwt.sign({
            user : {
                username : compareUser.username,
                email : compareUser.email,
            }
        }, "NEWS", {expiresIn : "15m"}
        );
        res.status(200).json({ accessToken });
    }else{
        res.status(401)
        throw new Error("email or password is not valid");
    }
})


module.exports = {registerUser, loginUser}