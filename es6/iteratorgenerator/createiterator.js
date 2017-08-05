function createIterator(items) { 
    var i = 0;
    return {
        next: function () { 
            return {
                done: (i >= items.length),
                value: this.done ? undefined : items[i++]                
            }
        }
    }
}

var iterator = createIterator([1, 2, 3]);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());