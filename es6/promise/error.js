let promise = new Promise(function (resolve, reject) {
    try {
        throw new Error("boom");
    } catch (err) {
        console.log(err.message);
        //reject(err);
    }    
});

promise.catch(function (err) {
    console.log(err);
});