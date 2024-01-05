// https://www.codewars.com/kata/568ff914fc7a40a18500005c/train/javascript

function distancesFromAverage(arr) {
  //your code here
  const final = [];
  const total = arr.reduce((t, c) => t + c, 0) / arr.length;
  for (let index = 0; index < arr.length; index++) {
    const num = Math.round((total - arr[index]) * 100) / 100;

    final.push(num);
  }

  return final;
}

console.log(
  distancesFromAverage([-7, -6, -8, 6, -6, -3, 1, -9, 9, -4]),
  [4.3, 3.3, 5.3, -8.7, 3.3, 0.3, -3.7, 6.3, -11.7, 1.3]
);
// console.log(
//   distancesFromAverage([55, 95, 62, 36, 48]),
//   [4.2, -35.8, -2.8, 23.2, 11.2]
// );
// console.log(distancesFromAverage([1, 1, 1, 1, 1]), [0, 0, 0, 0, 0]);
// console.log(
//   distancesFromAverage([1, -1, 1, -1, 1, -1]),
//   [-1.0, 1.0, -1.0, 1.0, -1.0, 1.0]
// );
// console.log(
//   distancesFromAverage([1, -1, 1, -1, 1]),
//   [-0.8, 1.2, -0.8, 1.2, -0.8]
// );
// console.log(distancesFromAverage([2, -2]), [-2.0, 2.0]);
// console.log(distancesFromAverage([1]), [0]);
// console.log(
//   distancesFromAverage([123, -65, 32432, -353, -534]),
//   [6197.6, 6385.6, -26111.4, 6673.6, 6854.6]
// );
// console.log(
//   distancesFromAverage(
//     Array(102)
//       .join("a")
//       .split("")
//       .map((a, b) => b)
//   ),
//   Array(102)
//     .join("a")
//     .split("")
//     .map((a, b) => 50 - b)
// );
// console.log(
//   distancesFromAverage(
//     Array(1002)
//       .join("a")
//       .split("")
//       .map((a, b) => b)
//   ).join(",") ==
//     Array(1002)
//       .join("a")
//       .split("")
//       .map((a, b) => 500 - b)
//       .join(","),
//   true
// ); //not to flood the console...
// console.log(
//   distancesFromAverage(
//     Array(100002)
//       .join("a")
//       .split("")
//       .map((a, b) => b)
//   ).join(",") ==
//     Array(100002)
//       .join("a")
//       .split("")
//       .map((a, b) => 50000 - b)
//       .join(","),
//   true
// );
