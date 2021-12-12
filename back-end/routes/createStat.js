const express = require("express");
const router = express.Router();
const axios = require("axios");
require("./createChallenge.js")

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

const StatSchema = new mongoose.Schema({
    ongoing_challenges: Number,
    done_challenges: Number,
    points: Number
  })

const Stats = mongoose.model("Stats", StatSchema)

const SaveStatData = async (content) =>{

    // create data
    let newData = await getMockData();
    const data= {
        ongoing: newData.ongoing,
        done: newData.done,
        points: newData.points
    }

    // instance of post model
    const Stat1  = new Stats(data);

    // save this post to database
    Stat1.save((error) =>{
        if(error){
            console.log("Oops something went wrong!")
        }
        else{
            console.log("Data saved to MongoDB!")
        }
    })
}

router.post("/", (req, res) => {
    const ongoing = req.body.ongoing
    const done = req.body.done
    const points = req.body.points
    const data = {ongoing: ongoing, done: done, points: points}
    SaveStatData(data);
    console.log(req.body);
    res.send({text: "User Input Received"});
  })


module.exports = router;