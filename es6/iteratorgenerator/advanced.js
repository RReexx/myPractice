function *createIterator() { 
    let first = yield 1;
    let second;
    try {
        second = yield first + 2;
    } catch (error) {
        second = 10;
    }
    let third = yield second + 3;
}

var iterator = createIterator();
console.log(iterator.next(4));
console.log(iterator.next(5));
console.log(iterator.throw(new Error("boom")));