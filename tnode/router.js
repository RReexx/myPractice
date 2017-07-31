const express = require("express");

var app = express();
app.listen(3000);

var sportRouter = express.Router();
app.use("/sport", sportRouter);
sportRouter.use("/football", function (req, res) {
    res.end("this is football channel");
});

var weatherRouter = express.Router();
app.use("/weather", weatherRouter);
weatherRouter.use("/wuhan", function (req, res) {
    res.end("wuhan is sunny");
});