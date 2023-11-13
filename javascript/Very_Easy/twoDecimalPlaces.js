// https://www.codewars.com/kata/5641c3f809bf31f008000042/train/javascript
// decimals
function twoDecimalPlaces(num) {
  const n = `${num}`;
  return Number(`${n}`.slice(0, n.indexOf(".") + 3));
}

// another way
function twoDecimalPlaces(num) {
  return Math.trunc(num * 100) / 100;
}

console.log(
  twoDecimalPlaces(10.1289767789),
  10.12,
  "didn't work for 10.1289767789"
);
console.log(
  twoDecimalPlaces(-7488.83485834983),
  -7488.83,
  "didn't work for -7488.83485834983"
);
console.log(twoDecimalPlaces(4.653725356), 4.65, "didn't work for 4.653725356");
