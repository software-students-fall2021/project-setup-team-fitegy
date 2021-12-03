const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const app = express();

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ limit: '150mb',
extended:true }));
app.use(bodyParser.json({limit: '150mb'}));

//mongoDB code 

const mongoose = require("mongoose");
require('dotenv').config({path:'../.env'})
const {Schema}= mongoose;
const MONGODB_URL = 'mongodb+srv://${provess.env.DB_USERNAME}:${process.env.DB_PASSWORD}@fitegy.w1f4m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(MONGODB_URL);

// Define Schema for each post
const PostSchema = new mongoose.Schema({
  title: String,
  content: String,
  // fileName: String,
  // fileType: String,
  // fileSize: String,
  // lastModifiedDate: String,
  selectedFile:
    {
        data: Buffer,
        contentType: String
    },
  isPrivate: Boolean
});

// Model for each post
const Post = mongoose.model("Post", PostSchema);

// function for saving the data to MongoDB
const SavePostData = async (id) =>{
  // instance of post model
  // const post1  = new Post(data);
  const post1 = await Post.findOne({_id:id})
  post1.save();
  // save this post to database
  // post1.save((error) =>{
  //     if(error){
  //         console.log("Oops something went wrong!")
  //     }
  //     else{
  //         console.log("Data saved to MongoDB!")
  //     }
  // })
} 
// function for saving the data to MongoDB



router.post("/", (req, res) => {
    console.log(req.body.text);
  // res.send({text: "begin posting"});
    const title = req.body.title
    const content = req.body.content
    // const dates = req.body.date
    const isPrivate = req.body.isPrivate
    // const fileName = req.body.fileName
    // const desc = req.body.desc
    const selectedFile = req.body.selectedFile
    // now do something amazing with this data...
    // ... then send a response of some kind
    SavePostData(req.body.id);
    res.send({text: "User Input Received"});
  })


module.exports = router;
