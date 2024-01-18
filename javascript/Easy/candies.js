// https://www.codewars.com/kata/55466644b5d240d1d70000ba/train/javascript
function candies(kids) {
  if (kids.length <= 1) return -1;
  const max = Math.max(...kids);
  let sweets = 0;
  for (let i = 0; i < kids.length; i++) {
    sweets += max - kids[i];
  }
  return sweets;
}

console.log(candies([5, 8, 6, 4]), 9);
console.log(candies([1, 2, 4, 6]), 11);
console.log(candies([1, 2]), 1);
console.log(candies([4, 2]), 2);
