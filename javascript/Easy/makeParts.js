// https://www.codewars.com/kata/58ac59d21c9e1d7dc5000150/train/javascript

// function makeParts(arr, chunkSize) {
//   const newArr = [];
//   for (let i = 0; i < arr.length; i += chunkSize) {
//     newArr.push([arr.slice(i, i + chunkSize)]);
//   }
//   return newArr;

// }

// Another solution not mine
const makeParts = (a, k) =>
  Array.from({ length: Math.ceil(a.length / k) }, (_, i) =>
    a.slice(k * i, k * (i + 1))
  );

console.log(makeParts([1, 2, 3, 4, 5], 2), [[1, 2], [3, 4], [5]]);
console.log(makeParts([1, 2, 3], 1), [[1], [2], [3]]);
// console.log(makeParts([1, 2, 3, 4, 5], 10), [[1, 2, 3, 4, 5]]);
