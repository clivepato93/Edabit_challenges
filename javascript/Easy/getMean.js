// https://www.codewars.com/kata/583df40bf30065fa9900010c/train/javascript
function getMean(arr, x, y) {
  const totalx = arr.slice(0, x).reduce((t, c) => t + c, 0);
  const totaly = arr.slice(-y).reduce((t, c) => t + c, 0);

  return x <= 1 || y > arr.length ? -1 : (totalx / x + totaly / y) / 2;
}

console.log(getMean([1, 3, 2, 4], 2, 3), 2.5);
console.log(getMean([1, 3, 2], 2, 2), 2.25);
console.log(getMean([1, 3, 2, 4], 1, 2), -1);
console.log(getMean([1, 3, 2, 4], 2, 8), -1);
