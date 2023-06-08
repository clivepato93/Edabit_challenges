// https://www.codewars.com/kata/5721a78c283129e416000999/train/javascript

// function pickIt(arr) {
//   var odd = [],
//     even = [];
//   //coding here
//   for (let index = 0; index < arr.length; index++) {
//     if (arr[index] % 2 == 0) {
//       even.push(arr[index]);
//     } else {
//       odd.push(arr[index]);
//     }
//   }

//   return [odd, even];
// }

// // For Of Loop
// function pickIt(arr) {
//   var odd = [],
//     even = [];
//   //coding here
//   for (number of arr) {
//     if (number % 2 == 0) {
//       even.push(number);
//     } else {
//       odd.push(number);
//     }
//   }

//   return [odd, even];
// }

// recursive
function pickIt(arr, even = [], odd = []) {
  //coding here
  if (!arr.length) {
    return [odd, even];
  }

  if (arr[0] % 2 == 0) {
    even.push(arr.shift());
  } else {
    odd.push(arr.shift());
  }

  return pickIt(arr, even, odd);
}

console.log(pickIt([1, 2]), [[1], [2]]);
console.log(pickIt([1, 2, 3]), [[1, 3], [2]]);
console.log(pickIt([3, 2, 1]), [[3, 1], [2]]);
console.log(pickIt([10, 20, 30]), [[], [10, 20, 30]]);
console.log(pickIt([11, 21, 31]), [[11, 21, 31], []]);
console.log(pickIt([8, 1, 5, 4, 6, 1, 1]), [
  [1, 5, 1, 1],
  [8, 4, 6],
]);
