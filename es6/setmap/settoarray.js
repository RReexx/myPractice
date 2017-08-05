var arr = [1, , 43, 4, 5, 43, 4];
var eliminateDuplicates = function (arr) {
    return [...new Set(arr)];
};
console.log(eliminateDuplicates(arr));