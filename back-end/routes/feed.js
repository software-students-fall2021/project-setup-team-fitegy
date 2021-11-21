const express = require("express");
const router = express.Router();
const axios = require("axios");

// mongoDB 
const mongoose = require("Mongoose");
const { Schema } = mongoose;
const MONGODB_URL = "mongodb+srv://fitegy:fitegy2021@fitegy.w1f4m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(MONGODB_URL);
require("./createPost.js")
const Post = mongoose.model("Post");


router.get('/', async (req, res) => {
    const Posts = await Post.find();
    const feedPosts = Posts.map((post)=>{
        return {name: post.Name, location: post.Location, text: post.postText}
      })
    console.log(feedPosts)
    res.json(feedPosts);
})

module.exports = router;
