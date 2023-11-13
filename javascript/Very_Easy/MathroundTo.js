// https://www.codewars.com/kata/56be025f9347a066c7000e4f/train/javascript

// precision rounding
Math.roundTo = function (number, precision) {
  // TODO: Program Me
  const calculatedPrecision = Math.pow(10, precision);
  return Math.round(number * calculatedPrecision) / calculatedPrecision;
};

console.log(Math.roundTo(3.1415926535, 4), 3.1416);
console.log(Math.roundTo(4, 5), 4);
console.log(Math.roundTo(4.1235343424, 6), 4.123534);
console.log(Math.roundTo(5.3035802, 3), 5.304);
console.log(Math.roundTo(0.9384930193848595, 15), 0.93849301938486);
console.log(Math.roundTo(9.9999, 3), 10);
