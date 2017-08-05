function createObject(aClass) { 
    return new aClass();
}

var o=createObject(class {
    sayHi() {
        console.log("hi");
    }
});

o.sayHi();

var obj = new class {
    constructor(name) {
        this.name = name;
    }
    sayName() {
        console.log(this.name);
    }
}("xiaoiy");

obj.sayName();