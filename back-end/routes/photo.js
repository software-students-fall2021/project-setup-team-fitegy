const express = require("express");
const router = express.Router();
const axios = require("axios");
require("./uploadPhoto.js")


const mongoose = require("mongoose");
const { Schema } = mongoose;
const MONGODB_URL = "mongodb+srv://fitegy:fitegy2021@fitegy.w1f4m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(MONGODB_URL);

const Image = mongoose.model("Image");

router.get("/", async (req, res) => {
  const images = await Image.find();
    const allImages = images.map((data)=>{
        return {
          "name": data.name, "desc": data.desc, "img": data.img,
          mainIcon: "ShieldIcon",
         subIcon: ["DirectionsBikeIcon", "EmojiEventsIcon"],
        }
      })
    console.log(allImages);
    res.json(allImages);
});

module.exports = router;






