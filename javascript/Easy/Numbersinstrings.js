// https://www.codewars.com/kata/59dd2c38f703c4ae5e000014/train/javascript
// regex numbers
function solve(s) {
  return Math.max(...s.split(/[a-z]/).map((num) => +num));
}

// Another solution

function solve(s) {
  return Math.max(...s.match(/\d+/g));
}

console.log(solve("gh12cdy695m1"), 695);
console.log(solve("2ti9iei7qhr5"), 9);
console.log(solve("vih61w8oohj5"), 61);
console.log(solve("f7g42g16hcu5"), 42);
console.log(solve("lu1j8qbbb85"), 85);
