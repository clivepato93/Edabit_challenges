// https://www.codewars.com/kata/57a1ae8c7cb1f31e4e000130/train/javascript

function getMinMax(arr) {
  //..
  return [Math.min(...arr), Math.max(...arr)];
}

console.log(getMinMax([1]), [1, 1]);
console.log(getMinMax([1, 2]), [1, 2]);
console.log(getMinMax([2, 1]), [1, 2]);
