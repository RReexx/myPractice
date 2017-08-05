var arr = [1, 2, 3, 4, 4];
var iterator = arr[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

function isIterable(...o) {
    o.forEach(function (item) { 
        if (typeof item[Symbol.iterator] === "function") {
            console.log(true)
        } else { 
            console.log(false);
        }
    })
    
}

isIterable([1, 2, 3, 4], { name: "xiaoyi" });