var collection = {
    0: "xiao",
    1: "yi",
    length: 2,
    [Symbol.isConcatSpreadable]:true
}

var arr = [1, 2];
var arr2 = arr.concat(collection);
console.log(arr2);