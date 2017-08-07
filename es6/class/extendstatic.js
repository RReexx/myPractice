class Rectangle { 
    constructor(length, width) { 
        this.length = length;
        this.width = width;
    }
    getArea() { 
        return this.length * this.width;
    }

    static create(length, width) { 
        return new Rectangle(length, width);
    }
}

class Square extends Rectangle { 
    constructor(length) { 
        super(length, length);
    }
}

let square = new Square(5);
console.log(square.getArea());
console.log(square instanceof Rectangle);

let rect = Square.create(3, 4);
console.log(rect instanceof Square);