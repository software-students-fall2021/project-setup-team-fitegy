const express = require("express");
const router = express.Router();
const axios = require("axios");


const mongoose = require("mongoose");
const { Schema } = mongoose;
const MONGODB_URL = "mongodb+srv://fitegy:fitegy2021@fitegy.w1f4m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(MONGODB_URL);

const Challenge = mongoose.model("Challenge", ChallengeSchema);

/* let mockData;
const getMockData = async () => {
    await axios
        .get("https://my.api.mockaroo.com/myapi.json?key=aea8ef40")
        .then(apiResponse => mockData = apiResponse.data) 
        //.catch(err => next(err)) // pass any errors to express

    let newData = mockData.map((data) => {
        return {"title": data.title, "description": data.description, "dateStart": data.dateStart, "dateEnd": data.dateEnd}
    })
    return newData
} */

router.get("/", async (req, res) => {
  const challenges = await Challenge.find();
    const allChallenges = challenges.map((data)=>{
        return {
          "title": data.title, "description": data.description, "dateStart": data.dateStart,
         "dateEnd": data.dateEnd, mainIcon: "ShieldIcon",
         subIcon: ["DirectionsBikeIcon", "EmojiEventsIcon"],
        }
      })
    console.log(allChallenges);
    res.json(allChallenges);
});

module.exports = router;
