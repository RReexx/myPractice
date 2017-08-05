var http = require("http");
var fs = require("fs");
var ejs = require("ejs");
var queryString = require("querystring");

var items = [];

var server = http.createServer(function (req, res) {
    var html;    
    var method = req.method;
    switch (method) {
        case "GET":
            ejs.renderFile("./view.ejs", { items, items }, function (err, str) { 
                html = str;
                res.end(html);
            });            
            break;
        case "POST":
            var str = "";    
            req.on("data", function (chunk) {
                str += chunk;
            });
            req.on("end", function () {
                var obj=queryString.parse(str);
                items.push(obj.item);
                ejs.renderFile("./view.ejs", { items, items }, function (err, str) { 
                    html = str;
                    res.end(html);
                });
            });
            break;    
        default:
            break;
    }
    
});

server.listen(3000);