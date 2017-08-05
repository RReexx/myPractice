let firstName = Symbol("first name");
var person = {
    [firstName]: "yi"
}
Object.defineProperty(person, firstName, { writable: false });
let lastName = Symbol("last name");
Object.defineProperties(person, {
    [lastName]: {
        writable: false,
        value: "xiao"
    }
});
console.log(person[firstName]);
console.log(person[lastName]);
