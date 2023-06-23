//https://www.codewars.com/kata/529f2d1c403a58f660000656/train/javascript

// Object functions in objects
const Calculator = {
  add: (a, b) => a + b,
  subtract: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a && b ? a / b : false;
  },
};

console.log(Calculator.add(2, 4), 6, "2+4=6");
