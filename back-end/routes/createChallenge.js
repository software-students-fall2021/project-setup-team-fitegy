const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const app = express();
const mongoose = require('mongoose');

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//mongoDB code 

require('dotenv').config({path:../.env});
const {Schema}= mongoose;
const MONGODB_URL = 'mongodb+srv://${provess.env.DB_USERNAME}:${process.env.DB_PASSWORD}@fitegy.w1f4m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(MONGODB_URL);

// Define Schema for each challenge
const ChallengeSchema = new mongoose.Schema({
  title: String,
  description: String,
  dateStart: String,
  dateEnd: String,
});

// Model for each post
const Challenge = mongoose.model("Challenge", ChallengeSchema);

// function for saving the data to MongoDB
const SaveChallengeData = async (content) =>{
  // instance of post model
  const challenge1  = new Challenge(data);

  // save this post to database
  challenge1.save((error) =>{
      if(error){
          console.log("Oops something went wrong!")
      }
      else{
          console.log("Data saved to MongoDB!")
      }
  })
} 

router.post("/", (req, res) => {
    const name = req.body.name
    const topic = req.body.topic
    const dates = req.body.date
    const isPrivate = req.body.isPrivate
    // now do something amazing with this data...
    // ... then send a response of some kind
    console.log(req.body);
    res.send({text: "User Input Received"});
  })


module.exports = router;
