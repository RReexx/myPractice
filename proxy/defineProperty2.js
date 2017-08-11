let obj = {};

let proxy = new Proxy(obj, {
    defineProperty(target, key, descriptor) {
        if (typeof key === "symbol") { 
            throw new Error("cannot define symbol property");
        }
        return Reflect.defineProperty(target, key, descriptor);
    },
    getOwnPropertyDescriptor(target, key) {
        return Reflect.getOwnPropertyDescriptor(target, key);
    }
});

Object.defineProperty(proxy, "name", {
    configurable: true,
    value: "xiaoyi"
});

console.log(proxy.name);

let s = new Symbol("name");

Object.defineProperty(proxy, s, {
    configurable: true,
    value: "xiaoyi"
});