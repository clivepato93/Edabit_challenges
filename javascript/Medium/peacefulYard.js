// https://www.codewars.com/kata/5869848f2d52095be20001d1/train/javascript
function peacefulYard(yard, minDistance) {
  // your code here
  const cats = [];
  for (let i = 0; i < yard.length; i++) {
    for (let j = 0; j < yard[i].length; j++) {
      //   console.log(yard[i][j]);
      if (yard[i][j] == "L") {
        // console.log(yard[i], yard[i][j]);

        const x = i;
        const y = j;
        cats.push([x, y]);
      }
      if (yard[i][j] == "M") {
        const x = i;
        const y = j;
        cats.push([x, y]);
      }
      if (yard[i][j] == "R") {
        const x = i;
        const y = j;
        cats.push([x, y]);
      }
    }
  }
  if (cats.length <= 1) return true;
  function distanceCalc(a, b) {
    if (b[0] == 0 && b[1] == 0) return 0;
    return Math.sqrt((a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2);
  }
  const [distance1, distance2, distance3] = [
    distanceCalc(cats[0], cats[1]),
    distanceCalc(cats[0], cats[2] || [0, 0]),
    distanceCalc(cats[1], cats[2] || [0, 0]),
  ];
  console.log(distance1, distance2, distance3);
  //   if (distance1 == distance2 || distance2 == distance3) return true;

  //   return distances;
  if (distance1 < minDistance) return false;

  if (distance2 != 0 && distance2 < minDistance) return false;

  if (distance3 != 0 && distance3 < minDistance) return false;

  return true;
}
console.log(
  peacefulYard(
    [
      "--------------------",
      "--------------------",
      "------------------M-",
      "-----R--------------",
      "--------------------",
      "--------------------",
      "--------------------",
      "--------------------",
      "--------------------",
      "--------------------",
    ],
    7
  ),
  true
);
// console.log(
//   peacefulYard(
//     [
//       "------------",
//       "------------",
//       "-L----------",
//       "------------",
//       "------------",
//       "------------",
//     ],
//     10
//   ),
//   true
// );

// console.log(
//   peacefulYard(
//     [
//       "------------",
//       "---M--------",
//       "------------",
//       "------------",
//       "-------R----",
//       "------------",
//     ],
//     6
//   ),
//   false
// );
// console.log(
//   peacefulYard(
//     [
//       "-----------L",
//       "--R---------",
//       "------------",
//       "------------",
//       "------------",
//       "--M---------",
//     ],
//     4
//   ),
//   true
// );
