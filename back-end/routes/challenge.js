const express = require("express");
const router = express.Router();
const axios = require("axios");
require("./createChallenge.js");

const mongoose = require("mongoose");
require("dotenv").config({ path: "../.env" });
const { Schema } = mongoose;
const MONGODB_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@fitegy.w1f4m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
mongoose.connect(MONGODB_URL);

const Challenge = mongoose.model("Challenge");

router.get("/", async (req, res) => {
  const challenges = await Challenge.find();
  const allChallenges = challenges.map((data) => {
    return {
      title: data.title,
      description: data.description,
      date: data.date,
    };
  });
  // console.log(allChallenges);
  res.json(allChallenges);
});

module.exports = router;
