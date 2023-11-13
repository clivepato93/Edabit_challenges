// https://www.codewars.com/kata/558dd9a1b3f79dc88e000001/train/javascript
// arrays
function findDup(arr) {
  return arr.filter((num) => arr.filter((x) => x === num).length > 1)[0];
}

console.log(findDup([1, 2, 2, 3]), 2);
console.log(findDup([1, 3, 2, 5, 4, 5, 7, 6]), 5);
