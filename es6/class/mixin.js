let serialMixin = {
    serialize() { 
        return JSON.stringify(this);
    }
}

let areaMixin = {
    getArea() { 
        return this.length * this.width;
    }
}

function getBase(...mixins) { 
    let Base = function () { }
    Object.assign(Base.prototype, ...mixins);
    return Base;
}

class Square extends getBase(serialMixin, areaMixin) { 
    constructor(length) { 
        super();
        this.length = length;
        this.width = length;
    }
}

let s = new Square(5);
console.log(s.getArea());
console.log(s.serialize());