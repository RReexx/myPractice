let reject = Promise.reject(new Error("boom"));
process.on("unhandledRejection", function (reason, promise) {
    console.log(reason.message, promise === reject);
});