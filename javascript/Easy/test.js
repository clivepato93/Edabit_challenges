// function countup(n) {
//   debugger;
//   if (n < 1) return [];
//   else {
//     const countArray = countup(n - 1);
//     countArray.push(n);
//     return countArray;
//   }
// }

// console.log(countup(5));

function multiply(arr, n) {
  debugger;
  if (n <= 0) {
    return 1;
  }
  return multiply(arr, n - 1) * arr[n - 1];
}

console.log(multiply([1, 2, 3, 4, 5], 5));
