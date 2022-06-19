// https://www.codewars.com/kata/59a8570b570190d313000037/train/javascript

// function sumCubes(n) {
// ...
//   return Array.from({ length: n }, (_, i) => i + 1).reduce(
//     (t, c) => t + c ** 3,
//     0
//   );
// }

// not my solution but prefer it
function sumCubes(n) {
  return ((n * (n + 1)) / 2) ** 2;
}

console.log(sumCubes(2), 9);
