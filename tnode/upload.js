var express = require("express");
var multer = require("multer");
var path = require("path");
var fs = require("fs");

var server = express();
server.listen(3000);

var objMulter = multer({ dest: "uploads/" });
server.post("/", objMulter.single("f1"), function (req, res) {
    var extendName = path.parse(req.file.originalname).ext;
    fs.rename(req.file.path, req.file.path + extendName, function (err) {
        if (err) {
            console.log(err);
            res.end("fail");
        } else { 
            res.end("success");
        }      
    });
    
});