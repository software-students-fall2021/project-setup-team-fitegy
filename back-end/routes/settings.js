const express = require("express");
const router = express.Router();
const axios = require("axios");
require('dotenv').config();

// mongoDB 
const mongoose = require("mongoose");
require('dotenv').config({path:'../.env'})
const { Schema } = mongoose;
const MONGODB_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@fitegy.w1f4m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
mongoose.connect(MONGODB_URL);


// Define Schema for each notification
const UserInfoSchema = new Schema({
  name: String,
  lastName: String,
  username: String, 
  location: String,
});

// Model for each notification
const UserInfo = mongoose.model("Userinfo", UserInfoSchema);


router.get('/', async (req, res) => {
  const UserInfos = await UserInfo.find();
  res.json(UserInfos[0])

})

module.exports = router;
