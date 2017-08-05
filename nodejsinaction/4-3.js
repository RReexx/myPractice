var http = require("http");
var fs = require("fs");
var url = require("url");
var path = require("path");

var server = http.createServer(function (req, res) {
    var root = __dirname;
    var filePath = path.join(root, req.url);
    // var stream=fs.createReadStream(filePath);
    // stream.on("data", function (chunk) {
    //     res.write(chunk);
    // });
    // stream.on("end", function () {
    //     res.end();
    // });
    fs.stat(filePath, function (err, stat) {
        if (err) {
            if (err.code = "ENOENT") {
                res.statusCode = 404;
                res.end("404 not found");
            } else {
                res.statusCode = 500;
                res.end("Internal Server Error");
            }
        } else {
            var stream = fs.createReadStream(filePath);
            stream.pipe(res);
            stream.on("error", function (err) {
                res.statusCode = 500;
                res.end("Internal server error");
            })
        }
    });    
});

server.listen(3000);