// https://www.codewars.com/kata/56dd9b84fe5754786f0014f7/train/javascript
// Prototype
// This is for a kata only this is bad due to overwriting the default filter func
Array.prototype.filter = function (func) {
  const newArr = [];
  for (let i = 0; i < this.length; i++) {
    if (func(this[i])) newArr.push(this[i]);
  }
  return newArr;
};

console.log(
  [1, 2, 3, 4].filter((num) => {
    return num > 3;
  }),
  [4]
);
