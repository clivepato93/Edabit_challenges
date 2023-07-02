// https://www.codewars.com/kata/55dc4520094bbaf50e0000cb/train/javascript
function amIWilson(p) {
  if (p === 5 || p === 13 || p === 563) return true;
  return false;
}

console.log(amIWilson(13), true);
// console.log(amIWilson(5), true);
// console.log(amIWilson(9), false);
// console.log(amIWilson(6), false);
console.log(amIWilson(67), false);
