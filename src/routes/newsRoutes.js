const express = require("express");
const {getPreferences, updatePreferences, news} = require("../controllers/newsController")
const verifyToken = require("../middleware/authJWT")

const router = express.Router();

router.get('/preferences',verifyToken,getPreferences)
router.put('/updatePreferences',verifyToken, updatePreferences)
router.get('/news',verifyToken, news)

module.exports = router; 

