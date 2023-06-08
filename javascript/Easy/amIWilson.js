// https://www.codewars.com/kata/55dc4520094bbaf50e0000cb/train/javascript
function amIWilson(p) {
  // check if prime is Wilson
  //   ((P-1)! + 1) / (P * P)
  let totalFac =
    Array.from({ length: p - 1 }, (_, num) => num + 1).reduce(
      (total, num) => total * num,
      1
    ) + 1;
  //   console.log(totalFac, p ** 2);
  //   return arr / p ** 2;
  while (totalFac > 1) {
    if (totalFac % p ** 2 === 0) {
      return true;
    }
    totalFac /= p ** 2;
  }

  return false;
}

console.log(amIWilson(13), true);
// console.log(amIWilson(5), true);
// console.log(amIWilson(9), false);
// console.log(amIWilson(6), false);
console.log(amIWilson(67), false);
