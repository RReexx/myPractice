class Person{
    constructor(name){
        this.name = name;
    }
    sayName(){
        console.log(this.name);
    }
}

let xy = new Person("xiaoyi");
xy.sayName();
console.log(typeof Person, Person instanceof Object, xy.name,Person.name);
 