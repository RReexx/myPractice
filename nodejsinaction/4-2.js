const http = require("http");
var items = [];

var server = http.createServer(function (req, res) {
    var method = req.method;
    switch (method) { 
        case "POST":
            processPost(req, res);
            break;
        case "GET":
            processGet(req, res);
            break;
        case "DELETE":
            processDelete(req, res);
            break;
        default:
            res.write("错误的操作");    
    }
});

function processPost(req, res) { 
    var str = "";
    req.setEncoding("utf8")
    req.on("data", function (chunk) {
        str += chunk;
    });
    req.on("end", function () {
        items.push(str);
        res.end("OK");
    });
}

function processGet(req, res) {
    var body = items.map(function (item, i) {
        return i + ")" + item;
    }).join("\n");
    res.setHeader("Content-Type", "text/plain");
    res.setHeader("Content-Length", Buffer.byteLength(body));
    res.end(body);
}

function processDelete(req, res) { 
    var str = req.url;
    var index = Number(str.slice(1));
    if (isNaN(index)) {//输入的不是数字就会有这种情况 
        res.statusCode = 400;
        res.end("invalid item id");
    } else if (!items[index]) {
        res.statusCode = 404;
        res.end("item not found");
    } else { 
        items.splice(index, 1);
        res.end("OK");
    }    
}

server.listen(3000);