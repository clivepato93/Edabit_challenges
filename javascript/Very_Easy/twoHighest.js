// https://www.codewars.com/kata/57ab3c09bb994429df000a4a/train/javascript
// Set Sort Arrays
function twoHighest(arr) {
  return [...new Set(arr)]
    .sort((a, b) => a - b)
    .slice(-2)
    .reverse();
}

console.log(twoHighest([]), []);
console.log(twoHighest([15]), [15]);
console.log(twoHighest([15, 20, 20, 17]), [20, 17]);
