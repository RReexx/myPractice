let person = {
    name: "xiaoyi",
    age:23
};

let proxy = new Proxy(person, {
    has(target, key) {
        if (key === "age") {
            return false;
        } else { 
            return Reflect.get(target, key);
        }        
    },
    get(target, key, receiver) {
        if (!(key in receiver)) {//不用target，否则达不到影藏目的
            throw new TypeError(`属性${key}不在对象${receiver}中`);
        }
        return Reflect.get(target, key, receiver);
    }

});

console.log("toString" in proxy);
console.log("age" in proxy);
console.log(proxy.age);