const express = require("express");
const router = express.Router();
const axios = require("axios");

// mockaroo
let mockData;
const getMockData = async () => {
    await axios
        .get("https://my.api.mockaroo.com/post_data.json?key=44aeded0")
        .then(apiResponse => mockData = apiResponse.data) 
        //.catch(err => next(err)) // pass any errors to express

    let newData = mockData.map((post) => {
        return {"name": post.first_name + " " + post.last_name, "location" : post.location}
    })
    return newData
}


// mongoDB 
const mongoose = require("Mongoose");
const { Schema } = mongoose;
const MONGODB_URL = "mongodb+srv://fitegy:fitegy2021@fitegy.w1f4m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(MONGODB_URL);

mongoose.connection.on("connected", ()=>{
  console.log("Mongoose is connected!");
})

// function for saving the data to MongoDB
const SavePostData = async () =>{
    // Define Schema for each post
    const PostSchema = new Schema({
        Name: String,
        Location: String,
        postText: String
    });

    // Model for each post
    const Post = mongoose.model("Post", PostSchema);

    // create some dummy data
    let newData = await getMockData();
    const data= {
        Name: newData[0].name,
        Location: newData[0].location,
        postText: "Brooklyn Halloween Challenge: every sunday morning we will be doing a 5k vapire run from Brooklyn to Manhattan!"
    }

    // instance of post model
    const Post1  = new Post(data);

    // save this post to database
    Post1.save((error) =>{
        if(error){
            console.log("Oops something went wrong!")
        }
        else{
            console.log("Data saved to MongoDB!")
        }
    })
}


// express code

SavePostData();
router.get('/', async (req, res) => {
    let newData = await getMockData();
    res.json([
        {name: newData[0].name, location: newData[0].location, text: "Brooklyn Halloween Challenge: every sunday morning we will be doing a 5k vapire run from Brooklyn to Manhattan!"},
        {name: newData[1].name, location: newData[1].location, text: "Update: 2 weeks into the Kyrie Irving Leg Day Challenge. Feeling stronger!!💪"},
        {name: newData[2].name, location: newData[2].location, text: "Doing my morning yoga session created by me and coach Lin. Join us for a spiritual and healthy start of your day!🤍🔮🐈🌫"}
    ]
  );
})

module.exports = router;
