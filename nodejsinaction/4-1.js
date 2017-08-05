const http = require("http");
var server = http.createServer(function (req, res) {
    var url = "www.baidu.com";
    var body = "<h1>Redirecting to " + url + "</h1>";
    res.setHeader("Content-Type", "text/html");
    res.setHeader("Content-Length", body.length);
    res.statusCode=302;
    res.end(body);
});
server.listen(3000);