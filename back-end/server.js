#!/usr/bin/env node

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const server = require("./app") // load up the web server
const port = 3001 // the port to listen to for incoming requests
const router = require('./routes/router');
// call express's listen function to start listening to the port
const listener = server.listen(port, function () {
  console.log(`Server running on port: ${port}`)
})
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use('/upload', router);
// a function to stop listening to the port
const close = () => {
  listener.close()
}
module.exports = {
  close: close,
} 
