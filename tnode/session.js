var express = require("express");
var cookieSession = require("cookie-session");

var server = express();
server.listen(8080);

var arr = [];
for (var i = 0; i < 1000; i++) { 
    arr[i] = "keys_" + Math.random();
}
server.use(cookieSession({ name: "session", keys: arr }));
server.use("/", function (req, res) {
    if (req.session['count']) {
        req.session['count']++;
    } else {
        req.session['count'] = 1;
    }
    res.end(req.session['count'].toString());
});