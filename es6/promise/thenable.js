let thenable = {
    then(resolve, reject) {
        resolve(100);
    }
};

let promise = Promise.resolve(thenable);
promise.then(function (value) {
    console.log(value);
});