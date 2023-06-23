//https://www.codewars.com/kata/56e3cd1d93c3d940e50006a4/train/javascript
// Spread operator
function makeValley(arr) {
  // Your code
  const newArr = arr.sort((a, b) => b - a);
  let x = 0;
  const leftWing = [];
  const rightWing = [];
  for (let i = 0; i < newArr.length; i++) {
    i % 2 == 0 ? leftWing.push(arr[i]) : rightWing.unshift(arr[i]);
  }

  return [...leftWing, ...rightWing];
}

// console.log(makeValley([20, 7, 6, 2]), [20, 6, 2, 7]);
console.log(makeValley([14, 10, 8]), [14, 8, 10]);
