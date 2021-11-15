const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const app = express();

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.post("/", (req, res) => {
    console.log(req.body);
    res.send("Like Received!");
  })

module.exports = router;
