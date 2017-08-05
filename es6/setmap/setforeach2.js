let a = new Set([1, 2, 3, 4, 5]);

// let processor = {
//     output(value) {
//         console.log(value);
//     },
//     process(set) {
//         set.forEach(function (element) {
//             this.output(element);
//         }, this);
//     }
// };

let processor = {
    output(value) {
        console.log(value);
    },
    process(set) {
        set.forEach(element => this.output(element));
    }
};



processor.process(a);