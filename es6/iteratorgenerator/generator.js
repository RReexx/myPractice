function* createIterator() { 
    yield 1;
    yield 2;
    yield 3;
}

// var iterator = createIterator();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// function *createIterator2(items) {
var o = {
    *createIterator(items){
        for (var i = 0; i < items.length; i++) {
            yield items[i];
        }
    }
}


var iterator = o.createIterator([1,2,3,4,5,6]);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());