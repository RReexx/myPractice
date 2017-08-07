const fs = require("fs");

let promise = new Promise(function (resolve, reject) {
    fs.readFile("file.txt", "utf8",function (err, data) {
        if (err) {
            reject(err);
        }
        resolve(data);
    });
});

promise.then(function (data) {
    console.log(data);
}).catch(function (err) {
    console.error(err);
});