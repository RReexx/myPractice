function *createNumberIterator(){
    yield 1;
    yield 2;
    return 3;
}

function *createRepeatIterator(count) { 
    for (var i = 0; i < count; i++) {
        yield *"repeat";        
    }
}

function *createCombinedIterator() { 
    let result=yield *createNumberIterator();
    yield* createRepeatIterator(result);
}

var iterator = createCombinedIterator();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// let iterator = createNumberIterator();
// console.log(iterator.next());           
// console.log(iterator.next());           
// console.log(iterator.next());          