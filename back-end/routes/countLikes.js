const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const app = express();

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// mongoDB 
const mongoose = require("Mongoose");
require('dotenv').config({path:'../.env'})
const { Schema } = mongoose;
const MONGODB_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@fitegy.w1f4m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
mongoose.connect(MONGODB_URL);
require("./createPost.js")
const Post = mongoose.model("Post");


// function for saving the data to MongoDB
const SaveLikeData = async (id) =>{
  const doc = await Post.findOne({_id: id})
  doc.Likes  = doc.Likes + 1;
  doc.save();
}


router.post("/", (req, res) => {
    console.log(req.body.text);
    SaveLikeData(req.body.id);
    res.send({text:'Like received!'});
  })

module.exports = router;
