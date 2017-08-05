var ws = new WeakSet();
var key = {};
ws.add(key);
key = null;

var s = new Set();
var key2 = {};
s.add(key2);
key2 = null;
console.log(s.has(key2));
console.log(s.size);
console.log(...s);