//https://www.codewars.com/kata/5763bb0af716cad8fb000580/train/javascript

// https://math.stackexchange.com/questions/1874787/puzzle-find-number-of-cubes-with-1-red-face
function countSquares(cuts) {
  if (cuts === 0) return 1;

  return 6 * cuts * cuts + 2;
}

console.log(countSquares(5), 152);
console.log(countSquares(16), 1538);
console.log(countSquares(23), 3176);
