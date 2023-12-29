const asyncHandler = require("express-async-handler");

//@desc Register a user
//@route POST /api/register
//@access public
const registerUser = asyncHandler(async(req,res) =>{
    res.status(200).json({ message: "Register the user" })
})

//@desc login a user.
//@route POST /api/login
//@access public
const loginUser = asyncHandler(async(req,res) =>{
    res.status(200).json({ message: "Register the user" })
})


module.exports = {registerUser, loginUser}