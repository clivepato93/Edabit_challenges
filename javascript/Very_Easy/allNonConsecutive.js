// https://www.codewars.com/kata/58f8b35fda19c0c79400020f/train/javascript
// Arrays
function allNonConsecutive(arr) {
  const values = [];
  for (let i = 0; i < arr.length - 1; i++) {
    const start = arr[i];
    const [curr, next] = arr.slice(i, i + 2);
    if (Math.abs(start - arr[i + 1]) !== 1) {
      values.push({ i: arr.indexOf(next), n: next });
    }
  }
  return values;
}

const results = allNonConsecutive([1, 2, 3, 4, 6, 7, 8, 10]);
console.log(results, [
  { i: 4, n: 6 },
  { i: 7, n: 10 },
]);
