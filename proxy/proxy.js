var target = {};
var proxy = new Proxy(target, {});
proxy.name = "xiaoyi";
console.log(target.name);
target.name = "xy";
console.log(proxy.name);

var obj = new Proxy({}, {
    get: function (target, key, receiver) {
        console.log(`getting ${key}`);
        return Reflect.get(target, key, receiver);
    },
    set: function (target, key, value, receiver) {
        console.log(`setting ${key}`);
        return Reflect.set(target, key, value, receiver);
    }
});

obj.name = "xiaoyi";
var name = obj.name;

var o = new Proxy({}, {
    get: function () {
        return 100;
    }
});
console.log(o.name);

let o2 = Object.create(o);
o2.name = "xiaoyi"; 
console.log(o2.name, o2.age);

var handler = {
    get: function (target,key) { 
        if (key === "prototype") { 
            return Object.prototype;
        }
        return "hello " + key;
    },
    construct: function (target, args) { 
        return args[0];
    },
    apply: function (target, object, args) { 
        return args[1];
    },
}

var fproxy = new Proxy(function (x, y) {
    return x + y;
}, handler);

console.log(fproxy.prototype, new fproxy({age:1},2), fproxy.foo, fproxy(1, 2));