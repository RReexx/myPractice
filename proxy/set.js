let target = {
    name: "xiaoyi"
};

let proxy = new Proxy(target, {
    set(target, key, value, receiver) {
        if (!target.hasOwnProperty(key)) {
            if (isNaN(value)) {
                throw new Error("not a number");
            }
        }
        Reflect.set(target, key, value, receiver);
    }
});

proxy.age = 23;
console.log(target.age);
target.height = 184;
console.log(proxy.height);
proxy.width = "100px";