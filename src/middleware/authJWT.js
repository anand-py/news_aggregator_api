const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
require('dotenv').config()




const verifyToken = asyncHandler(async (req, res, next) => {
  let token;
  let authHeader = req.headers.Authorization || req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];
    jwt.verify(token, "NEWS", (err, decoded) => {
      if (err) {
        res.status(401)
        console.error(err);
        throw new Error("User is not authorized");
        
      }
      req.user = decoded.user;
      next();
    });

    if (!token) {
      res.status(401)
      throw new Error("User is not authorized or token is missing");
    }
  }
})
module.exports = verifyToken;