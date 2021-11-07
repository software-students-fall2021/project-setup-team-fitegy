const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get('/', (req, res) => {
    res.json([
        {name: "Lady Gaga", location: "Brooklyn", text: "Brooklyn Halloween Challenge: every sunday morning we will be doing a 5k vapire run from Brooklyn to Manhattan!"},
        {name: "James Bond", location: "Manhattan", text: "Update: 2 weeks into the Kyrie Irving Leg Day Challenge. Feeling stronger!!💪"},
        {name: "Ariana Grande", location: "California", text: "Doing my morning yoga session created by me and coach Lin. J2oin us for a spiritual and healthy start of your day!🤍🔮🐈🌫"}
    ]
  );
})

module.exports = router;
