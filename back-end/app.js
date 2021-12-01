// import and instantiate express
const express = require("express"); // CommonJS import style!
const app = express(); // instantiate an Express object

// import some useful middleware
const bodyParser = require("body-parser"); // middleware to help parse incoming HTTP POST data
const multer = require("multer"); // middleware to handle HTTP POST requests with file uploads
const axios = require("axios"); // middleware for making requests to APIs
require("dotenv").config({ silent: true }); // load environmental variables from a hidden file named .env
const morgan = require("morgan"); // middleware for nice logging of incoming HTTP requests
const PORT = process.env.PORT || 3001;
const cors = require("cors");
require("../back-end/db.js");
require('dotenv').config();

app.use(cors());
/**
 * Typically, all middlewares would be included before routes
 * In this file, however, most middlewares are after most routes
 * This is to match the order of the accompanying slides
 */

// use the morgan middleware to log all incoming http requests
app.use(morgan("dev")); // morgan has a few logging default styles - dev is a nice concise color-coded style

// use the bodyparser middleware to parse any data included in a request
app.use(bodyParser.json()); // decode JSON-formatted incoming POST data
app.use(bodyParser.urlencoded({ extended: true })); // decode url-encoded incoming POST data

// make 'public' directory publicly readable with static content
app.use("/static", express.static("public"));

// route for HTTP GET requests to the root document

app.get("/", (req, res) => {
  res.send("Hello! This is the server for Fitegy.");
});

app.use("/api/feed", require("./routes/feed.js"));
app.use("/api/challenge", require("./routes/challenge.js"));
app.use("/api/notifications", require("./routes/notification.js"));
app.use("/api/createChallenge", require("./routes/createChallenge.js"));
app.use("/api/profile", require("./routes/profile.js"));
app.use("/api/createPost", require("./routes/createPost.js"));
app.use("/api/uploadPhoto", require("./routes/uploadPhoto.js"));
app.use("/api/joined", require("./routes/joined"));
app.use("/api/liked", require("./routes/countLikes.js"));
//app.use("/api/settings", require("./routes/settings.js"));



// export the express app we created to make it available to other modules
module.exports = app; // CommonJS export style
