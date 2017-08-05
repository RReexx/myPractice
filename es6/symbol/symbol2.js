let uid = Symbol.for("uid");
let object = {};
object[uid] = "123445";
console.log(object[uid], uid);

let uid2 = Symbol.for("uid");
console.log(uid2, uid2 === uid, object[uid2]);
