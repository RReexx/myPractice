const express=require('express');
const static=require('express-static');
const cookieParser=require('cookie-parser');
const cookieSession=require('cookie-session');
const bodyParser=require('body-parser');
const multer=require('multer');
const ejs=require('ejs');
const jade=require('jade');

var server = express();
server.listen(3000);

server.use(bodyParser());//.urlencoded({ extended: false })
server.use(multer({dest:"./upload/" }).any());
server.use(cookieParser("sdfa"));

var arr = [];
for (var i = 0; i < 1000; i++) { 
    arr[i] = "keys_" + Math.random();
}
server.use(cookieSession({ name: "xysession", keys: arr }));

server.use("/", function (req, res) {
    res.cookie("username", "xiaoyi");
    if (req.session['count']) {
        req.session['count']++;
    } else {
        req.session['count'] = 1;
    }
    res.end("ok");
    console.log(req.query, req.body,req.files,req.cookies,req.session);
})