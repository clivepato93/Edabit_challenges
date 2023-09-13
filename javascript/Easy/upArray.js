// https://www.codewars.com/kata/5514e5b77e6b2f38e0000ca9/train/javascript

function upArray(arr) {
  // ...
  const newArr = [];
  for (let index = arr.length; index >= 0; index--) {
    const element = arr[index];
    if (element < 0 || element > 10) return null;
  }
}

console.log(upArray([4, 3, 2, 5]), [4, 3, 2, 6]);
console.log(upArray([2, 3, 9, 9]), [2, 4, 0, 0]);
console.log(upArray([9, 9]), [1, 0, 0]);
console.log(upArray([0, 7]), [0, 8]);
console.log(
  upArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]),
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1]
);

console.log(upArray([1, -9]));
console.log(upArray([1, 10]));
