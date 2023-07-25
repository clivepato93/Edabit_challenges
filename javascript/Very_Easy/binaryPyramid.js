// https://www.codewars.com/kata/5596700a386158e3aa000011/solutions/javascript
// Binary
function binaryPyramid(m, n) {
  return Array.from({ length: n - m + 1 }, (_, i) => i + m)
    .map((num) => +num.toString(2))
    .reduce((t, c) => t + c, 0)
    .toString(2);
}

console.log(binaryPyramid(1, 4), "1111010");
console.log(binaryPyramid(1, 6), "101001101");
console.log(binaryPyramid(6, 20), "1110010110100011");
console.log(binaryPyramid(21, 60), "1100000100010001010100");
