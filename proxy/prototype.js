let person = {
    name: "xiaoyi",
    age:23
};

let proxy = new Proxy(person, {
    getPrototypeOf(target) { 
        return null;
    },
    setPrototypeOf(target, value) { 
        return false;
    }
});

let proxyProto=Object.getPrototypeOf(proxy);
let personProto = Object.getPrototypeOf(person);
console.log(proxyProto, personProto, personProto === Object.prototype);
let setPerson=Object.setPrototypeOf(person, {});
let setProxy=Object.setPrototypeOf(proxy, {});
console.log(setProxy, setPerson);