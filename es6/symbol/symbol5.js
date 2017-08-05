function SpecialNumber() { 

}

Object.defineProperty(SpecialNumber, Symbol.hasInstance, {
    value: function (v) {
        return (v instanceof Number) && (v > 1 && v < 100)
    }
});

var a = new Number(2);
var b = new Number(1);
console.log(a instanceof SpecialNumber, b instanceof SpecialNumber);