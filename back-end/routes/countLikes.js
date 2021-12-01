const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const app = express();
const axios = require("axios");

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let mockData;
const getMockData = async () => {
    await axios
        .get("https://my.api.mockaroo.com/random_names.json?key=44aeded0")
        .then(apiResponse => mockData = apiResponse.data) 
        .then(() => console.log(mockData))
        //.catch(err => next(err)) // pass any errors to express

    let newData = mockData.map((notif) => {
        return {"name": notif.first_name + " " + notif.last_name}
    })
    return newData
}

// mongoDB 
const mongoose = require("mongoose");
require('dotenv').config({path:'../.env'})
const { Schema } = mongoose;
const MONGODB_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@fitegy.w1f4m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
mongoose.connect(MONGODB_URL);
require("./createPost.js")
require("./notification.js")
const Post = mongoose.model("Post");



// function for saving the data to MongoDB
const SaveLikeData = async (id) =>{
  const doc = await Post.findOne({_id: id})
  doc.Likes  = doc.Likes + 1;
  doc.save();
}

const Notif = mongoose.model("Notif");

// function for saving the data to MongoDB
const SaveNotifData = async (text) =>{

  // create data
  let newData = await getMockData();
  const data= {
      Name: newData[0].name,
      Text: text, 
  }

  // instance of post model
  const Notif1  = new Notif(data);

  // save this post to database
  Notif1.save((error) =>{
      if(error){
          console.log("Oops something went wrong!")
      }
      else{
          console.log("Data saved to MongoDB!")
      }
  })
}


router.post("/", (req, res) => {
    //console.log(req.body.text);
    SaveLikeData(req.body.id);
    const newNotifText = " liked your post: " + req.body.content
    SaveNotifData(newNotifText)
    res.send({text:'Like received!'});
  })

module.exports = router;
