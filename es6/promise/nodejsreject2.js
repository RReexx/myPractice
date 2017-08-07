let reject = Promise.reject(new Error("boom"));
process.on("rejectionHandled", function (promise) {
    console.log(promise === reject);
});
setTimeout(function () {
    reject.catch(function (err) { 
        console.log(err.message);
    })
}, 1000);