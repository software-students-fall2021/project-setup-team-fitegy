const express = require("express");
const router = express.Router();
const axios = require("axios");

let mockData;
const getMockData = async () => {
    await axios
        .get("https://my.api.mockaroo.com/post_data.json?key=44aeded0")
        .then(apiResponse => mockData = apiResponse.data) 
        .catch(err => next(err)) // pass any errors to express

    let newData = mockData.map((post) => {
        return {"name": post.first_name + " " + post.last_name, "location" : post.location}
    })
    return newData
}
router.get('/', async (req, res) => {
    let newData = await getMockData();
    res.json([
        {name: newData[0].name, location: newData[0].location, text: "Brooklyn Halloween Challenge: every sunday morning we will be doing a 5k vapire run from Brooklyn to Manhattan!"},
        {name: newData[1].name, location: newData[1].location, text: "Update: 2 weeks into the Kyrie Irving Leg Day Challenge. Feeling stronger!!💪"},
        {name: newData[2].name, location: newData[2].location, text: "Doing my morning yoga session created by me and coach Lin. Join us for a spiritual and healthy start of your day!🤍🔮🐈🌫"}
    ]
  );
})

module.exports = router;
