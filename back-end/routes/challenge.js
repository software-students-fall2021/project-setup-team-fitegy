const express = require("express");
const router = express.Router();
const axios = require("axios");

let mockData;
const getMockData = async () => {
    await axios
        .get("https://my.api.mockaroo.com/myapi.json?key=aea8ef40")
        .then(apiResponse => mockData = apiResponse.data) 
        //.catch(err => next(err)) // pass any errors to express

    let newData = mockData.map((data) => {
        return {"title": data.title, "description": data.description, "dateStart": data.dateStart, "dateEnd": data.dateEnd}
    })
    return newData
}

router.get("/", async (req, res) => {
  let newData = await getMockData();
  console.log(newData)
  res.json([
    {
      title: newData[0].title,
      description: newData[0].description,
      dateStart: newData[0].dateStart,
      dateEnd: newData[0].dateEnd,
      mainIcon: "ShieldIcon",
      subIcon: ["DirectionsBikeIcon", "EmojiEventsIcon"],
    },

    {
      title: newData[1].title,
      description: newData[1].description,
      dateStart: newData[1].dateStart,
      dateEnd: newData[1].dateEnd,
      mainIcon: "ShieldIcon",
      subIcon: ["DirectionsBikeIcon", "EmojiEventsIcon"],
    },

    {
      title: newData[2].title,
      description: newData[2].description,
      dateStart: newData[2].dateStart,
      dateEnd: newData[2].dateEnd,
      mainIcon: "ShieldIcon",
      subIcon: ["DirectionsBikeIcon", "EmojiEventsIcon"],
    },
  ]);
});

module.exports = router;
