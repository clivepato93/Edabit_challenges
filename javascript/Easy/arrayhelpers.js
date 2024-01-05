// https://www.codewars.com/kata/525d50d2037b7acd6e000534/train/javascript
// prototype function
Array.prototype.square = function () {
  return this.map((el) => el ** 2);
};

Array.prototype.cube = function () {
  return this.map((el) => el ** 3);
};

Array.prototype.sum = function () {
  return this.reduce((t, c) => t + c, 0);
};

Array.prototype.average = function () {
  return this.reduce((t, c) => t + c, 0) / this.length;
};

Array.prototype.even = function () {
  return this.filter((num) => num % 2 == 0);
};

Array.prototype.odd = function () {
  return this.filter((num) => num % 2);
};

const numbers = [1, 2, 3, 4, 5];
console.log(numbers.square(), [1, 4, 9, 16, 25]);
console.log(numbers.cube(), [1, 8, 27, 64, 125]);
console.log(numbers.sum(), 15, "Wrong sum");
console.log(numbers.average(), 3, "Wrong average");
console.log(numbers.even(), [2, 4], "Wrong result for even()");
console.log(numbers.odd(), [1, 3, 5], "Wrong result for odd()");
