const express = require("express");
const router = express.Router();
const axios = require("axios");
require("./uploadPhoto.js");

// mongoDB
require("dotenv").config({ path: "../.env" });
const mongoose = require("mongoose");
const { Schema } = mongoose;
const MONGODB_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@fitegy.w1f4m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
mongoose.connect(MONGODB_URL);

const ImageSchema = mongoose.Schema({
  fileName: String,
});
const Image = mongoose.model("Images", ImageSchema);

router.get("/", async (req, res) => {
  const images = await Image.find();
  const allImages = images.map((data) => {
    console.log(data);
    return {
      fileName: data.fileName,
    };
  });
  console.log(allImages);
  res.json(allImages);
});

module.exports = router;
