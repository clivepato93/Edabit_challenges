// https://www.codewars.com/kata/573f5c61e7752709df0005d2/train/javascript

function mergeArrays(a, b) {
  // your code here
  const c = [...new Set([...a.slice(), ...b.slice()])].sort((a, b) => a - b);
  return c;
}

console.log(mergeArrays([1, 3, 5], [2, 4, 6]), [1, 2, 3, 4, 5, 6]);
console.log(mergeArrays([2, 4, 8], [2, 4, 6]), [2, 4, 6, 8]);
