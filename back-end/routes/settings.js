const express = require('express');
const app = express();
const port = 3001;
const axios = require('axios').default;
//require('dotenv').config();

//mongoDb Info
{/*
const mongoose = require("mongoose");
require('dotenv').config({path:'../.env'})
const { Schema } = mongoose;
const MONGODB_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@fitegy.w1f4m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
mongoose.connect(MONGODB_URL);
require("./createPost.js")
const Post = mongoose.model("Post");
*/}


app.get('/', (req, res) => {
  res.send("Settings Page");
});

app.get('/pass', (req, res) => {
  res.send("Password Changed");
});

app.get('/delete', (req, res) => {
  res.send("Account Deleted");
});

app.listen(port, () => {
  console.log(`Started on Port ${port}`);
});

  