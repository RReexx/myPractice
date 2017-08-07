class MyArray extends Array{ 
    // constructor(...args) { 
    //     super(...args);
    // }
}

let arr = new MyArray(1, 2, 3);
let subArr = arr.slice(0, 2);
console.log(subArr instanceof MyArray);