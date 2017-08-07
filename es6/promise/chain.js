let promise = new Promise(function (resolve, reject) {
    resolve(100);
});

promise.then(function (value) {
    console.log(value);
}).then(function () {
    console.log("finished");
    });

let p = new Promise(function (resolve, reject) {
    resolve(100);
});

p.then(function (value) {
    throw new Error("boom");
}).catch(function (err) {
    console.log(err.message);
});