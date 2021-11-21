const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const app = express();
const axios = require("axios");

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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
require('dotenv').config({path:'../.env'});
const mongoose = require("Mongoose");
const { Schema } = mongoose;
const MONGODB_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@fitegy.w1f4m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
mongoose.connect(MONGODB_URL);

// check if mongoose is connected to MongoDB
/*
mongoose.connection.on("connected", ()=>{
  console.log("Mongoose is connected!");
})
*/

// Define Schema for each post
const PostSchema = new Schema({
  Name: String,
  Location: String,
  postText: String
});

// Model for each post
const Post = mongoose.model("Post", PostSchema);


// function for saving the data to MongoDB
const SavePostData = async (content) =>{

    // create data
    let newData = await getMockData();
    const data= {
        Name: newData[0].name,
        Location: newData[0].location,
        postText: content
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
router.post("/", async (req, res) => {
    //const title = req.body.title
    const content = req.body.content
    const isPrivate = req.body.isPrivate
    SavePostData(req.body.content);
    console.log(req.body);
    res.send({text: "User Input Received"});
  })


module.exports = router;
