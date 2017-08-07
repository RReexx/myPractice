let promise = new Promise(function (resolve, reject) {
    console.log("executor");
    resolve();
});

promise.then(function () {
    console.log("then");
});

console.log("hi");