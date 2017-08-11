let person = {
    name: "xiaoyi",
    age:23
};

let proxy = new Proxy(person, {
    deleteProperty(target, key) {
        if (key === "age") {
            return false;
        } else { 
            return Reflect.deleteProperty(target, key);
        }        
    }
});
let result = delete proxy.name;
console.log(result);
console.log("name" in proxy);
console.log(delete proxy.age);
console.log("age" in proxy);

// let target = {
//     name: "target",
//     value: 42
// };

// let proxy = new Proxy(target, {
//     deleteProperty(trapTarget, key) {

//         if (key === "value") {
//             return false;
//         } else {
//             return Reflect.deleteProperty(trapTarget, key);
//         }
//     }
// });

// // Attempt to delete proxy.value

// console.log("value" in proxy);      // true

// let result1 = delete proxy.value;
// console.log(result1);               // false

// console.log("value" in proxy);      // true

// // Attempt to delete proxy.name

// console.log("name" in proxy);       // true

// let result2 = delete proxy.name;
// console.log(result2);               // true

// console.log("name" in proxy);       // false