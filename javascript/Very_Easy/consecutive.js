// https://www.codewars.com/kata/559cc2d2b802a5c94700000c/train/javascript

function consecutive(arr) {
  //code me
  arr = arr.sort((a, b) => a - b);
  console.log(arr);
  let total = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    const [curr, next] = arr.slice(i, i + 2);

    if (Math.abs(next - curr) !== 1) total += Math.abs(next - curr) - 1;
  }
  return total;
}

console.log(consecutive([4, 8, 6]), 2);
console.log(consecutive([1, 2, 3, 4]), 0);
console.log(consecutive([]), 0);
console.log(consecutive([1]), 0);
