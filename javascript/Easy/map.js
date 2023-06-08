//www.codewars.com/kata/56e20642ddeb0f4fac000344/train/javascript

// OOP Prototype
// Array.prototype.map = function (func) {
//   let arr = [];
//   for (let i = 0; i < this.length; i++) {
//     arr.push(func(this[i]));
//   }

//   return arr;
// };

console.log(
  [1, 2, 3].map((x) => x ** 2),
  [1, 4, 9]
);
// console.log(
//   [1, 2, 3].map((x) => 2 * x),
//   [2, 4, 6]
// );
// console.log(
//   [1, 2, 3].map((x) => 2 ** x),
//   [2, 4, 8]
// );
// console.log(
//   [1, 2, 3].map((x) => x.toString()),
//   ["1", "2", "3"]
// );
// console.log(
//   ["1", "2", "3"].map((x) => parseInt(x)),
//   [1, 2, 3]
// );
