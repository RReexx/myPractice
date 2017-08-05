let a = new Set([1, 2, 3]);
a.forEach((value, key, myset) => {
    console.log(key + " " + value + "\r\n");
    console.log(myset === a);
});