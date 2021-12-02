const express = require("express");
const router = express.Router();
const axios = require("axios");

let mockData;
const getMockData = async () => {
    await axios
        .get("https://my.api.mockaroo.com/statistics.json?key=08be32e0")
        .then(apiResponse => mockData = apiResponse.data) 
        .then(() => console.log(mockData))

    return mockData
}

router.get('/', async (req, res) => {
  let newData = await getMockData();
  res.json([
      {ongoing: newData.ongoing_challenges, done: newData.done_challenges, points: newData.points},
  ]);
})

module.exports = router;