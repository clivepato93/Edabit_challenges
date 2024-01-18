// https://www.codewars.com/kata/54f9cba3c417224c63000872/train/javascript

function montyHall(c, p) {
  // Your code here
  return Math.round((p.filter((n) => c != n).length / p.length) * 100);
}

console.log(
  montyHall(1, [3, 3, 2, 3, 3, 2, 2, 3, 2, 2, 1, 1, 1, 1]),
  71,
  "Testing for a correct door 1"
);
console.log(
  montyHall(2, [3, 3, 2, 3, 3, 2, 2, 3, 2, 2, 1, 1, 1, 1]),
  64,
  "Testing for a correct door 2"
);
console.log(
  montyHall(3, [3, 3, 2, 3, 3, 2, 2, 3, 2, 2, 1, 1, 1, 1]),
  64,
  "Testing for a correct door 3"
);
