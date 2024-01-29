// https://www.codewars.com/kata/5a3e1319b6486ac96f000049/train/javascript
function pairs(array) {
  //..
  let total = 0;
  for (let index = 0; index < array.length; index += 2) {
    if (Math.abs(array[index] - array[index + 1]) == 1) {
      total++;
    }
  }
  return total;
}

console.log(pairs([1, 2, 5, 8, -4, -3, 7, 6, 5]), 3);
console.log(pairs([21, 20, 22, 40, 39, -56, 30, -55, 95, 94]), 2);
console.log(pairs([81, 44, 80, 26, 12, 27, -34, 37, -35]), 0);
console.log(pairs([-55, -56, -7, -6, 56, 55, 63, 62]), 4);
console.log(pairs([73, 72, 8, 9, 73, 72]), 3);
