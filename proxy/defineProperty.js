let obj = {};

let proxy = new Proxy(obj, {
    defineProperty(target, key, descriptor) {
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

let descriptor = Object.getOwnPropertyDescriptor(proxy, "name");
console.log(descriptor);