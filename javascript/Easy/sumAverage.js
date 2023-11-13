// https://www.codewars.com/kata/56d5166ec87df55dbe000063/train/javascript

const sumAverage = (arr) => {
  let result;
  // Your code here
  return Math.floor(
    arr.reduce(
      (total, row) => (total += row.reduce((t, c) => t + c, 0) / row.length),
      0
    )
  );
};

/*
const sumAverage = (arr) => {
  let result;
  // Your code here
  return Math.floor(
    arr.reduce((total, row, i) => {
      const x = row.reduce((t, c) => t + c, 0);
      return (total += x / row.length);
    }, 0)
  );
};
*/
console.log(
  sumAverage([
    [3, 4, 1, 3, 5, 1, 4],
    [21, 54, 33, 21, 77],
  ]),
  44
);
// console.log(
//   sumAverage([
//     [-4, 3, -8, -2],
//     [2, 9, 1, -5],
//     [-7, -2, -6, -4],
//   ]),
//   -6
// );
