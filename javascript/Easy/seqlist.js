// https://www.codewars.com/kata/541da001259d9ca85d000688/train/javascript
var seqlist = function (first, c, l) {
  // Thou shalt begin !
  return Array.from({ length: l }, (_, i) => first + i * c);
};

console.log(
  seqlist(0, 1, 20),
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
);
