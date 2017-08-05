let colors = [ "red", "green", "blue" ];
let tracking = new Set([1234, 5678, 9012]);
let data = new Map();

data.set("title", "Understanding ECMAScript 6");
data.set("format", "ebook");

for (let entry of colors.entries()) { 
    console.log(entry);
}

for (let [key, value] of data.entries()) { 
    console.log(key + "=" + value);
}

var message = "A 𠮷 B";

for (let c of message) {
    console.log(c);
}

let map = new Map([["name", "Nicholas"], ["age", 25]]);
var arr = [...map];
console.log(arr);

let str = "arsenal";
var array = [...str];
console.log(array);