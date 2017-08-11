let person = {
    name: "xiaoyi",
    age:23
};

let proxy = new Proxy(person, {
    getPrototypeOf(target) { 
        return Reflect.getPrototypeOf(target);
    },
    setPrototypeOf(target, value) { 
        return Reflect.setPrototypeOf(target, value);
    }
});

let proxyProto=Object.getPrototypeOf(proxy);
let personProto = Object.getPrototypeOf(person);
console.log(proxyProto, personProto, personProto === Object.prototype);
let setPerson=Object.setPrototypeOf(person, {});
let setProxy=Object.setPrototypeOf(proxy, {});
console.log(setProxy, setPerson);

let obj = Object.getPrototypeOf(1);
console.log(obj === Number.prototype);
let obj2 = Reflect.getPrototypeOf(1);