// https://www.codewars.com/kata/57241e0f440cd279b5000829/train/javascript

function sumMul(n, m, increment = n) {
  //your idea here
  if (n <= 0 || m <= 0) return "INVALID";
  if (Number.isInteger(m / n)) {
    return Array.from(
      { length: Math.floor(m / n - 1) },
      (_, i) => (i + 1) * n
    ).reduce((t, c) => t + c, 0);
  }

  return Array.from(
    { length: Math.floor(m / n) },
    (_, i) => (i + 1) * n
  ).reduce((t, c) => t + c, 0);
}

// console.log(sumMul(38, 5624), 413364);
// console.log(sumMul(0, 0), "INVALID");
// console.log(sumMul(2, 9), 20);
// console.log(sumMul(3, 13), 30);
// console.log(sumMul(4, -7), "INVALID");
// console.log(sumMul(20, 2120), 111300);

function sumAdd(n) {
  debugger;
  if (n <= 1) {
    return n;
  }
  return n + sumAdd(n - 1);
}

console.log(sumAdd(10), 55);
