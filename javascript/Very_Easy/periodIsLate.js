// https://www.codewars.com/kata/578a8a01e9fd1549e50001f1/train/javascrpt

function periodIsLate(last, today, cycleLength) {
  return (
    Math.floor((today.getTime() - last.getTime()) / (86400 * 1000)) >
    cycleLength
  );
}

console.log(
  periodIsLate(new Date(2016, 07, 12), new Date(2016, 08, 09), 28),
  false
);

console.log(
  periodIsLate(new Date(2039, 12, 19), new Date(2040, 01, 09), 40),
  false
);
// console.log(
//   periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 35),
//   false
// );
// console.log(
//   periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 28),
//   true
// );
