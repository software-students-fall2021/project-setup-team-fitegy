const express = require("express");
const router = express.Router();
const axios = require("axios");
require("./createPost.js");

// mongoDB
require("dotenv").config({ path: "../.env" });
const mongoose = require("mongoose");
const { Schema } = mongoose;
const MONGODB_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@fitegy.w1f4m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
mongoose.connect(MONGODB_URL);

// Is this route ever requested?

router.get("/", async (req, res) => {
  const posts = await Post.find();
  const allPosts = posts.map((data) => {
    return {
      title: data.title,
      content: data.content,
      mainIcon: "ShieldIcon",
      subIcon: ["DirectionsBikeIcon", "EmojiEventsIcon"],
    };
  });
  console.log(allPosts);
  res.json(allPosts);
});

module.exports = router;
