const express = require('express')
const app = express()

   app.use(express.json()) // for json
   app.use(express.urlencoded({ extended: true })) // for form data
   
app.post("/create-challenge", (req, res) => {
    const name = req.body.name
    const topic = req.body.topic
    const dates = req.body.date
    const isPrivate = req.body.isPrivate
    // now do something amazing with this data...
    // ... then send a response of some kind
    res.json(data)
  })
