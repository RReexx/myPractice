// function run(taskDef) {

//     // create the iterator, make available elsewhere
//     let task = taskDef();

//     // start the task
//     let result = task.next();
//     console.log(result);

//     // recursive function to keep calling next()
//     function step() {

//         // if there's more to do
//         if (!result.done) {
//             result = task.next(1);
//             console.log(result);
//             step();
//         }
//     }

//     // start the process
//     step();

// }

// run(function*() {    
//     let firstYield= yield 100;    
//     let secondYield = yield 200;
//     let thirdYield = yield 300;
// });


function run(taskDef) {

    // create the iterator, make available elsewhere
    let task = taskDef();

    // start the task
    let result = task.next();

    // recursive function to keep calling next()
    function step() {

        // if there's more to do
        if (!result.done) {
            result = task.next();
            step();
        }
    }

    // start the process
    step();

}

run(function*() {
    let value = yield 1;
    console.log(value);         // 1

    value = yield value + 3;
    console.log(value);         // 4
});