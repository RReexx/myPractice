class Temperature { 
    constructor(value) { 
        this.value = value;
    }
}

Temperature.prototype[Symbol.toPrimitive] = function (hint) {
    switch (hint) {
        case "string":
            return this.value + "\u00b0";
            break;
        case "number":
            return this.value;
            break;
        case "default":
            return this.value + "degrees";
            break;
    }
};

var t = new Temperature(32);
console.log(String(t),0-t,t+"!");