var uid = Symbol.for("uid");
var uid2 = Symbol.for("uid");
var uid3 = Symbol("uid");
console.log(Symbol.keyFor(uid));
console.log(Symbol.keyFor(uid2));
console.log(Symbol.keyFor(uid3));