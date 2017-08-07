let p1 = new Promise(function (resolve, reject) {
    resolve(1);
});
let p2 = new Promise(function (resolve, reject) {
    reject(2);
});

p1.then(function (value) {
    console.log(value);
    return p2;
}).catch(function (value) {
    console.log(value);
});