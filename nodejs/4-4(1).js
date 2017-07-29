var http = require("http");
var fs = require("fs");
var ejs = require("ejs");
var queryString = require("querystring");
var formidable = require("formidable");

var server = http.createServer(function (req, res) {
   
    var method = req.method;
    switch (method) {
        case "GET":
            ejs.renderFile('./view(1).ejs', function (err, data){
                res.setHeader("Content-Type", "text/html");
                res.setHeader("Content-Length", Buffer.byteLength(data));
                res.end(data);
            });          
            break;
        case "POST":
            if (req.headers['content-type'].indexOf("multipart/form-data") === -1) {
                res.statusCode = 400;
                res.end("400 bad request");
            } else { 
                var form = new formidable.IncomingForm();
                form.parse(req);
                form.on("field", function (field, value) {
                    console.log(field, value);
                });
                form.on("file", function (name, file) {
                    console.log(name);
                    console.log(file);
                });
                form.on("progress", function (received, expected) {
                    console.log(Math.floor(received / expected * 100));
                });
                form.on("end", function () { 
                    res.end("success");
                });
                // form.parse(req, function(err, fields, files) {
                //     res.writeHead(200, {'content-type': 'text/plain'});                    
                //     console.log(fields);
                //     console.log(files);
                //     res.end('received upload');
                // });
            }            
            break;    
        default:
            break;
    }
    
});

server.listen(3000);