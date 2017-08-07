// let buffer = new ArrayBuffer(10);
// let buffer2 = buffer.slice(4, 6);
// console.log(buffer.byteLength, buffer2.byteLength);
// let view = new DataView(buffer);
// let view2 = new DataView(buffer, 5, 2);
// console.log(view2.buffer === buffer);
// console.log(view2.byteOffset);
// console.log(view2.byteLength);

// let buffer = new ArrayBuffer(2);
// let dataView = new DataView(buffer);
// dataView.setInt8(0, 100);
// dataView.setInt8(1, 127);//无符号256 有符号128
// console.log(dataView.getInt8(0), dataView.getInt8(1));
// console.log(dataView.getInt16(0));

// let buffer = new ArrayBuffer(10);
// let view1 = new Int8Array(buffer);
// let view2 = new Int8Array(buffer, 5, 2);
// console.log(view1.byteLength, view2.byteLength);

// let ints = new Int16Array(2);
// let floats = new Float32Array(2);
// console.log(ints.byteLength, ints.length, floats.byteLength, floats.length);

// let ints1 = new Int16Array([25, 50]);
// let ints2 = new Int32Array(ints1);
// console.log(ints2.byteLength, ints2[1]);

// let ints1 = new Int16Array([100, 200]);
// ints2 = ints1.map(item => (item * 2));
// console.log(ints2, ints2.length, ints2.byteLength,ints2 instanceof Int16Array);

// let ints = new Int16Array([100, 200]);
// let arr = [...ints];
// console.log(arr, arr instanceof Int16Array, arr instanceof Array);

// let ints = Int16Array.of(100);
// let floats = Float32Array.from([200.02, 399.23]);
// console.log(ints, floats);
// console.log(floats instanceof Array, Array.isArray(floats));
// ints[1] = 200;
// console.log(ints);
// ints[0] = "hi";
// console.log(ints);
// floats.map(item => "hi");
// console.log(floats);

// let floats = new Float32Array([25, 50]),
//     mapped = floats.map(v => "hi");

// console.log(mapped.length);        // 2
// console.log(mapped[0]);            // 0
// console.log(mapped[1]);            // 0

// console.log(mapped instanceof Float32Array);  // true
// console.log(mapped instanceof Array);       // false

let ints = new Int16Array(4);
ints.set([1, 2]);
ints.set([3, 4], 2);
console.log(ints);

console.log(ints.subarray(), ints.subarray(2), ints.subarray(2, 4));