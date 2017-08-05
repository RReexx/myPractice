var arr = [];
console.log(arr instanceof Array);
console.log(Array[Symbol.hasInstance](arr));

function MyObject() { }

Object.defineProperty(MyObject, Symbol.hasInstance, {
    value: function () {
        return false;
    }
});

let obj = new MyObject();
console.log(obj instanceof MyObject);