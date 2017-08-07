let arr = [1, 23, 34];
arr.fill(1);
console.log(arr);

let arr2 = [1, 2, 3, 4, 5, 6];
arr2.fill(100, 3, 5);
console.log(arr2);

let arr3 = [1, 2, 3, 4];
arr3.copyWithin(2, 0);
console.log(arr3);

let arr4 = [1, 2, 3, 4];
arr4.copyWithin(2, 0, 1);
console.log(arr4);