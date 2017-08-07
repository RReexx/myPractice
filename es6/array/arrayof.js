let arr = Array.of(1);
console.log(arr.length);

function createArray(creator, ...values) { 
    return creator(...values);
}

let arr2=createArray(Array.of, 2, 3, 4, 8);

console.log(arr2.length);
console.log(arr instanceof Array);