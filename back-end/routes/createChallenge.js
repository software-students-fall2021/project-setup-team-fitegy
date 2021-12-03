const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const app = express();

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// mongoDB 
require('dotenv').config({path:'../.env'});
const mongoose = require("mongoose");
const { Schema } = mongoose;
const MONGODB_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@fitegy.w1f4m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
mongoose.connect(MONGODB_URL);

// Define Schema for each challenge
const ChallengeSchema = new mongoose.Schema({
  title: String,
  description: String,
  topic: String,
  date: String,
  isPrivate: String
});

// Model for each post
const Challenge = mongoose.model("Challenge", ChallengeSchema);

// function for saving the data to MongoDB
const SaveChallengeData = async (data) => {

  // instance of challenge model
  const challenge1  = new Challenge(data);

  // save this challenge to database
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
    const title = req.body.name
    const description = req.body.description
    const topic = req.body.topic
    const date = req.body.date
    const isPrivate = req.body.private
    const data = {title: title, description: description, topic: topic, date: date, isPrivate: isPrivate}
    SaveChallengeData(data);
    console.log(req.body);
    res.send({text: "User Input Received"});
  })


module.exports = router;
