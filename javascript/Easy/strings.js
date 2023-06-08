// https://www.codewars.com/kata/56d6b921c9ae3fd926000601/train/javascript

// implicit conversion OOP prototype
Number.prototype.toString = function () {
  return "" + this;
};
Array.prototype.toString = function () {
  return "[" + this.join(",") + "]";
};
Boolean.prototype.toString = function () {
  return "" + this;
};
Object.prototype.toString = function () {
  return "" + this;
};

// Boolean.prototype.toString = function () {
//   console.log(this);
//   return `${this}`;
// };

console.log(true.toString(), "true");
console.log(false.toString(), "false");
console.log([1, 2, 3, 4, 5].toString().replace(/\s+/g, ""), "[1,2,3,4,5]");
