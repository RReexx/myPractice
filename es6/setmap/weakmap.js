var Person = (function () {
    var privateData = new WeakMap();
    function Person(name) {
        privateData.set(this, name);
    }
    Person.prototype.get = function () {
        return privateData.get(this);
    }
    return Person;
})();

var person = new Person("xiaoyi");
console.log(person.get());