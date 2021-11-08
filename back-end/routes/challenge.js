const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get('/', (req, res) => {
    res.json([
        {title: "Run for 10 days",
        description: "Run for 10 days in a row to win this challenge",
        dateRange: "10/2/2021-12/30/2021"},
        {title: "Swim 100 laps",
        description: "Swim 100 laps in 5 days to win this challenge",
        dateRange: "11/2/2021-11/30/2021"},
        {title: "Lift weights for 3 days",
        description: "Lift weights at the gym 3 days in a row to win this challenge",
        dateRange: "10/2/2021-10/15/2021"}
    ]
  );
})

module.exports = router;
