let promise = new Promise(function (resolve, reject) {
    resolve(100);
});

promise.then(function (value) {
    console.log(value);
    return value + 1;
}).then(function (value) {
    console.log(value);
});