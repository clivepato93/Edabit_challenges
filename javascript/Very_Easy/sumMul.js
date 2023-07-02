// https://www.codewars.com/kata/57241e0f440cd279b5000829/train/javascript

function sumMul(n, m, increment = n) {
  //your idea here
  if (n <= 0 || m <= 0) return "INVALID";
  //   let total = 0;
  //   for (let i = 1; i < m; i++) {
  //     const mutiple = increment * i;
  //     console.log(mutiple);
  //     if (mutiple >= m) return total;
  //     total += mutiple;
  //   }
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
console.log(sumMul(38, 5624), 413364);
console.log(sumMul(0, 0), "INVALID");
console.log(sumMul(2, 9), 20);
console.log(sumMul(3, 13), 30);
console.log(sumMul(4, -7), "INVALID");
// console.log(sumMul(20, 2120), 111300);
