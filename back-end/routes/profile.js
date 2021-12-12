const express = require("express");
const router = express.Router();
const axios = require("axios");
require("./createStat.js")

// let mockData;
// const getMockData = async () => {
//     await axios
//         .get("https://my.api.mockaroo.com/statistics.json?key=08be32e0")
//         .then(apiResponse => mockData = apiResponse.data) 
//         .then(() => console.log(mockData))

//     return mockData
// }

// MongoDB
const mongoose = require('mongoose');
require('dotenv').config({path:'../.env'})
const { Schema } = mongoose;
const MONGODB_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@fitegy.w1f4m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
mongoose.connect(MONGODB_URL);

const Stats = mongoose.model("Stats");

router.get("/", async (req, res) => {
    const stats = await Stats.find();
    console.log(stats);
    res.json(stats);
  });

module.exports = router;