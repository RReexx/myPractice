class Person {
    constructor(name) { 
        this._name = name;
    }
    get name() { 
        return this._name;
    }
    set name(name) { 
        this._name = name;
    }
}

var descriptor = Object.getOwnPropertyDescriptor(Person.prototype, "name");
console.log("get" in descriptor);
var xy = new Person("xiaoyi");
xy.name = "XIAOYI";
console.log(xy.name,xy._name);