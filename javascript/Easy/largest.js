// https://www.codewars.com/kata/53d32bea2f2a21f666000256/train/javascript
// function largest(n, array, nums = []) {
//   // Find the n highest elements in a list
//   const nums = [];
//   while (nums.length !== n) {
//     let maxNum = Math.max(...array);
//     nums.push(maxNum);
//     array.splice(array.indexOf(maxNum), 1);
//     // console.log(nums);
//   }
//   return nums.sort((a, b) => a - b);
// }

function largest(n, array, nums = []) {
  // Find the n highest elements in a list
  if (nums.length == n) {
    return nums.sort((a, b) => a - b);
  }
  let maxNum = Math.max(...array);
  nums.push(maxNum);
  array.splice(array.indexOf(maxNum), 1);

  return largest(n, array, nums);
}

console.log(largest(2, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1], [9, 10]));
// console.log(largest(0, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1], []));
// console.log(largest(2, [-3, -2, -1, 0, -9, -8, -7, -6, -4, -5], [-1, 0]));
// console.log(largest(3, [5, 1, 5, 2, 3, 1, 2, 3, 5], [5, 5, 5]));
// console.log(
//   largest(7, [9, 1, 50, 22, 3, 13, 2, 63, 5], [3, 5, 9, 13, 22, 50, 63])
// );
// console.log(largest(0, [1, 2, 3, 4, 8, 7, 6, 5], []));
