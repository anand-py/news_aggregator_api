# news_aggregator_api
**Fetching news with there preferences**
**Objective**
Build a RESTful API that allows users to fetch news articles from multiple sources based on their preferences.

**Project Description:**
In this project, we will create a RESTful API using Node.js, Express.js, and NPM packages. The API will allow users to register, log in, and set their news preferences (e.g., categories, sources). The API will then fetch news articles from multiple sources using external news APIs (e.g., NewsAPI). The fetched articles should be processed and filtered asynchronously based on user preferences.

**1. Set up Project:**
Initialize a new Node.js project.
Install necessary dependencies, including Express.js and Mongoose.
**2. Implement RESTful API:**
Create the following endpoints:

POST api/register: Register a new user.
POST api/login: Log in a user.
GET api/preferences: Retrieve the news preferences for the logged-in user.
PUT api/updatePreferences: Update the news preferences for the logged-in user.
Use external news APIs to fetch news articles from multiple sources. Incorporate async/await and Promises in the process of fetching news data and filtering it based on user preferences.

Implement proper error handling for invalid requests.

Add input validation for user registration and news preference updates.

**3. Testing:**
Test the API using Postman or Curl to ensure it works as expected.
**4. Submission Guidelines:**
Initialize a new Node.js project.


# Step-by-Step Guide:
**Step 1: Initialize a new Node.js project**
Create a new directory for your project

mkdir news-aggregator-api cd news-aggregator-api

Initialize a new Node.js project

npm init -y

**Step 2: Install Dependencies**

Install necessary packages like Express and body-parser. npm install express body-parser

**Step 3: Implementing the API**
**Run the application**

node news_aggegrator_api/src/app.js




