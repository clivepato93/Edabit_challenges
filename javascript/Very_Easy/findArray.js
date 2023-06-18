// codewars.com/kata/59a2a3ba5eb5d4e609000055/train/javascript

function findArray(arr1, arr2) {
  // puzzles arrays
  return (arr1.length && arr2.length && arr2.map((val) => arr1[val])) || [];
}

// Readable solution

function findArray(arr1, arr2) {
  // puzzles arrays
  if (arr1.length && arr2.length) return arr2.map((val) => arr1[val]);
  return [];
}

console.log(findArray(["a", "a", "a", "a", "a"], [2, 4]), ["a", "a"]);
console.log(findArray([0, 1, 5, 2, 1, 8, 9, 1, 5], [1, 4, 7]), [1, 1, 1]);
console.log(findArray([1, 2, 3, 4, 5], [0]), [1]);
console.log(findArray([1, 2, 3, 4, 5], [4, 2, 0]), [5, 3, 1]);
console.log(findArray([1, 2, 3, 4, 5], [2, 2, 2]), [3, 3, 3]);
console.log(findArray(["this", "is", "test"], [0, 1, 2]), [
  "this",
  "is",
  "test",
]);

console.log(findArray([1, 2, 3], []), []);
console.log(findArray([], [2, 1, 3]), []);
console.log(findArray([], []), []);
