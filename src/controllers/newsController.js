const asyncHandler = require("express-async-handler");
const users = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")



//@desc News by Preferences
//@route GET /api/preferences
//@access private
const getPreferences = asyncHandler(async(req,res)=>{
    const userId = req.userId;
    const user = await users.findByID({userId});
    if(!user){
        res.status(404)
        throw new Error("User not found")
    }
    res.status(200)
    res.json(req.user.preferences);
})


//@desc Update Preferences
//@route GET /api/updatePreferences
//@access private
const updatePreferences = asyncHandler(async(req,res)=>{
    const userId = req.userId;
    const {preferences} = req.body;
    await users.findByIdAndUpdate(userId,{preferences})
    res.status(200).json({ message: 'Preferences updated successfully' });
})

//@desc Get News
//@route GET /api/news
//@access private

const news = asyncHandler(async (req, res) => {
    
      // Fetch news based on user preferences from an external API (e.g., NewsAPI)
      const newsAPIResponse = await axios.get('https://newsapi.org/v2/top-headlines', {
        params: {
          country: 'us',
          category: req.user.preferences.join(','), // Pass user preferences as categories
          apiKey: 'your_news_api_key',
        },
      });
    });


module.exports = {getPreferences, updatePreferences, news};