let person = {
    name: "xiaoyi"
};

let proxy = new Proxy(person, {
    get(target, key, receiver) {
        if (!(key in receiver)) {
            throw new TypeError(`属性${key}不在对象${receiver}中`);
        }
        return Reflect.get(target, key, receiver);
    }
});

console.log(proxy.name);
console.log(proxy.age);