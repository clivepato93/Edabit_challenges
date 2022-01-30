// https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript

function arrayDiff(a, b) {
  return a.filter(el => !b.includes(el))
}

console.log(arrayDiff([], [4,5]), [], "a was [], b was [4,5]");

console.log(arrayDiff([3,4], [3]), [4], "a was [3,4], b was [3]");

console.log(arrayDiff([1,8,2], []), [1,8,2], "a was [1,8,2], b was []");

console.log(arrayDiff([1,2,3], [1,2]), [3], "a was [1,2,3], b was [1,2]")