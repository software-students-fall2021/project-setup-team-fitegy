
const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const app = express();
const multer = require("multer");
const fs = require('fs');


let uploadFolder = './public/images/'; 

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log(req.file, req.body)
        cb(null, uploadFolder)
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "-" + Date.now() + "-" + file.originalname)
    }
});
var upload = multer({storage: storage});    


router.post('/uploadPhoto', upload.single('selectedFile'), function (req, res, next) {
    var file = req.file;
    var fileInfo = {};

    fileInfo.mimetype = file.mimetype;
    fileInfo.originalname = file.originalname;
    fileInfo.size = file.size;
    fileInfo.path = file.path;

    res.set({
        'content-type': 'application/json; charset=utf-8'
    });

    res.send(JSON.stringify(fileInfo));
    res.send("success");
    next();
  })

module.exports = router;
