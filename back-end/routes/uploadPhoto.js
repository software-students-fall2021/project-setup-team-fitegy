
const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const app = express();
const multer = require("multer");
const upload = multer({storage: storage});    
const fs = require('fs');

app.use(express.static(join(__dirname, 'public')))

// 1. 打开或创建一个名字叫folder文件夹
// let createFolder = function(folder) {
//   try {
//     fs.accessSync(folder); 
//   } catch (e) {
//     fs.mkdirSync(folder); 
//   } 
// };
let uploadFolder = './public/images/'; 
// createFolder(uploadFolder);

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log(req.file, req.body)
        cb(null, uploadFolder)
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "-" + Date.now() + "-" + file.originalname)
    }
});
app.post('/uploadPhoto', upload.single('selectedFile'), function (req, res, next) {
    var file = req.file;
    var fileInfo = {};

    // 获取文件信息
    fileInfo.mimetype = file.mimetype;
    fileInfo.originalname = file.originalname;
    fileInfo.size = file.size;
    fileInfo.path = file.path;

    // 设置响应类型及编码
    res.set({
        'content-type': 'application/json; charset=utf-8'
    });

    res.send(JSON.stringify(fileInfo));
    res.send("success");
    next();
  })


//mongoDB code 
// require('dotenv').config({path:'../.env'});
// const mongoose = require("mongoose");
// const { Schema } = mongoose;
// const MONGODB_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@fitegy.w1f4m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
// mongoose.connect(MONGODB_URL);


// var imageSchema = new mongoose.Schema({
//     name: String,
//     desc: String,
//     img:
//     {
//         data: Buffer,
//         contentType: String
//     }
// });
  
// module.exports = new mongoose.model('Image', imageSchema);

// function for saving the data to MongoDB
// const SavePostData = async (content) => {
//   // instance of post model
//   const img1  = new Image(data);
//   // save this post to database
//   img1.save((error) =>{
//       if(error){
//           console.log("Oops something went wrong!")
//       }
//       else{
//           console.log("Data saved to MongoDB!")
//       }
//   })
// } 


// router.post("/", (req, res) => {
//     const name = req.body.name
//     const desc = req.body.desc
//     const img = req.body.img
//     console.log(req.body);
//     res.send({text: "User Input Received"});
//   })


module.exports = router;

// const express = require("express");
// const bodyParser = require("body-parser");
// const router = express.Router();
// const app = express();

// //Here we are configuring express to use body-parser as middle-ware.
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// //mongoDB code 
// require('dotenv').config({path:'../.env'});
// const mongoose = require("mongoose");
// const { Schema } = mongoose;
// const MONGODB_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@fitegy.w1f4m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
// mongoose.connect(MONGODB_URL);


// var imageSchema = new mongoose.Schema({
//     name: String,
//     desc: String,
//     img:
//     {
//         data: Buffer,
//         contentType: String
//     }
// });
  
// module.exports = new mongoose.model('Image', imageSchema);

// // function for saving the data to MongoDB
// const SavePostData = async (content) => {
//   // instance of post model
//   const img1  = new Image(data);
//   // save this post to database
//   img1.save((error) =>{
//       if(error){
//           console.log("Oops something went wrong!")
//       }
//       else{
//           console.log("Data saved to MongoDB!")
//       }
//   })
// } 


// router.post("/", (req, res) => {
//     const name = req.body.name
//     const desc = req.body.desc
//     const img = req.body.img
//     console.log(req.body);
//     res.send({text: "User Input Received"});
//   })


// module.exports = router;
