let o = {
    arr: [2,3,4,5],
    [Symbol.iterator]: function* () {
        for (let item of this.arr) {
            yield item;
        }
    }
};

for (let item of o) { 
    console.log(item);
}