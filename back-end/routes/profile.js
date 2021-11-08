const express = require("express");
const router = express.Router();
const axios = require("axios");

let mockData;
const getMockData = async () => {
    await axios
        .get("https://my.api.mockaroo.com/statistics.json?key=08be32e0")
        .then(apiResponse => mockData = apiResponse.data) 
        .then(() => console.log(mockData))
        .catch(err => next(err)) 

    let newData = mockData.map((profileBar) => {
        return {"ongoing": profileBar.ongoing_challenges, "done": profileBar.done_challenges, "points": profileBar.points}
    })
    return newData
}

router.get('/', async (req, res) => {
  let newData = await getMockData();
  res.json([
      {ongoing: newData[0].ongoing_challenges, done: newData[0].done_challenges, points: newData[0].points},
  ]
);
})

module.exports = router;