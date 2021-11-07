const express = require("express");
const router = express.Router();
const axios = require("axios");

let mockData;
const getMockData = async () => {
    await axios
        .get("https://my.api.mockaroo.com/random_names.json?key=44aeded0")
        .then(apiResponse => mockData = apiResponse.data) 
        .then(() => console.log(mockData))
        .catch(err => next(err)) // pass any errors to express

    let newData = mockData.map((notif) => {
        return {"name": notif.first_name + " " + notif.last_name}
    })
    return newData
}
router.get('/', async (req, res) => {
    let newData = await getMockData();
    res.json([
        {name: newData[0].name, text: newData[0].name + " liked your post: Daily challenge completed with..."},
        {name: newData[1].name, text: newData[1].name + " commented: keep up the good work💪"},
        {name: newData[2].name, text: newData[2].name + " liked your post: Daily challenge completed with..."},
        {name: newData[3].name, text: newData[3].name + " commented: very nice job! Can I join you guys?"},
        {name: newData[4].name, text: newData[4].name + " commented: I tried your challenge last time and it was amazing! But now CAN YOU do my challenge?😈"},
        {name: newData[5].name, text: newData[5].name + " liked your post: Daily challenge completed with..."},
        {name: newData[6].name, text: newData[6].name + " commented: amazing!"},
        {name: newData[7].name, text: newData[7].name + " started following you!"},
        {name: newData[8].name, text: newData[8].name + " commented: Wow that was a killer workout! Mind if I copy yours?"},
        {name: newData[9].name, text: newData[9].name + " started following you!"}
    ]
  );
})

module.exports = router;
