function createArray() { 
    return Array.from(arguments);
}

let arr = createArray(1, 2, 3, 4);
console.log(arr);

function translateArray(fn,...values) { 
    return Array.from(values, fn);//这样有个问题，values本来就是数组，没什么好from的
}

let arr2=translateArray(value => value * 2, 1, 2, 3, 4, 5);
console.log(arr2);

let helper = {
    addValue: 5,
    translate: function (value) {
        return value + this.addValue;
    }
};

function translate() { 
    return Array.from(arguments, helper.translate, helper);
}

let arr3 = translate(3, 6, 9);
console.log(arr3);

let numbers = {
    *[Symbol.iterator]() { 
        yield 3;
        yield 6;
        yield 9;
    }
}

let arr4 = Array.from(numbers, value => (value + 5));
console.log(arr4);