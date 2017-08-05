let firstName = Symbol("first name");
let person = {};
person[firstName] = "yi"; 
console.log(person[firstName]);
console.log(firstName);
console.log("first name" in person);
console.log(firstName in person);
console.log(typeof firstName);