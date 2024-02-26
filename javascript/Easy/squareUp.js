// https://www.codewars.com/kata/5a8bcd980025e99381000099/train/javascript

function squareUp(n) {
  const arr = [];
  for (let index = 1; index <= n; index++) {
    const row = [];
    for (let j = 1; j <= n; j++) {
      if (j <= index) {
        row.push(j);
      } else {
        row.push(0);
      }
      //   console.log(arr);
    }
    arr.push(...row.reverse());
  }
  return arr; // Do your magic!
}

console.log(squareUp(4), [0, 0, 0, 1, 0, 0, 2, 1, 0, 3, 2, 1, 4, 3, 2, 1]);
// console.log(
//   squareUp(9),
//   [
//     0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 2, 1, 0, 0, 0, 0, 0, 0, 3,
//     2, 1, 0, 0, 0, 0, 0, 4, 3, 2, 1, 0, 0, 0, 0, 5, 4, 3, 2, 1, 0, 0, 0, 6, 5,
//     4, 3, 2, 1, 0, 0, 7, 6, 5, 4, 3, 2, 1, 0, 8, 7, 6, 5, 4, 3, 2, 1, 9, 8, 7,
//     6, 5, 4, 3, 2, 1,
//   ]
// );
// console.log(squareUp(1), [1]);
