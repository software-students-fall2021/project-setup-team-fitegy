const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const app = express();
const mongoose = require('mongoose');

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//mongoDB code 

require('dotenv').config({path:'../.env'})
const {Schema}= mongoose;
const MONGODB_URL = 'mongodb+srv://${provess.env.DB_USERNAME}:${process.env.DB_PASSWORD}@fitegy.w1f4m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(MONGODB_URL);

var imageSchema = new mongoose.Schema({
    name: String,
    desc: String,
    img:
    {
        data: Buffer,
        contentType: String
    }
});
  
module.exports = new mongoose.model('Image', imageSchema);

// function for saving the data to MongoDB
const SavePostData = async (content) => {
  // instance of post model
  const img1  = new Image(data);
  // save this post to database
  img1.save((error) =>{
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
    const desc = req.body.desc
    const img = req.body.img
    console.log(req.body);
    res.send({text: "User Input Received"});
  })


module.exports = router;
