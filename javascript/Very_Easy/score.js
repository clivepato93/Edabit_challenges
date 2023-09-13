// https://www.codewars.com/kata/56cafdabc8cfcc3ad4000a2b/train/javascript
const score = (n) => (n ? parseInt(n.toString(2).replace(/0/g, 1), 2) : n);

console.log(score(0), 0);
console.log(score(1), 1);
console.log(score(49), 63);
