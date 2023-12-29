const express = require("express");
const {getPreferences, updatePreferences, news} = require("../controllers/newsController")

const router = express.Router();

router.get('/preferences',getPreferences)
router.get('/updatePreferences', updatePreferences)
router.get('/news', news)

module.exports = newsRoutes; 

