// https://www.codewars.com/kata/54e2213f13d73eb9de0006d2/train/javascript
function pairZeros(arr) {
  let lastPair = [];

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];

    if (num == 0) {
      lastPair.push(i);
    }
    if (lastPair.length == 2) {
      arr.splice(i, 1);
      i--;

      lastPair = [];
    }
  }

  return arr;
}

// console.log(pairZeros([1]), [1]);

// console.log(pairZeros([0, 0]), [0]);

// console.log(pairZeros([0, 0, 0]), [0, 0]);

// console.log(pairZeros([1, 0, 1, 0, 2, 0, 0, 3, 0]), [1, 0, 1, 2, 0, 3, 0]);

console.log(
  pairZeros([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
  [+0, +0, +0, +0, +0, +0]
);
