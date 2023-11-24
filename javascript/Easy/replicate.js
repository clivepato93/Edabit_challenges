// https://www.codewars.com/kata/57547f9182655569ab0008c4/train/javascript
// recursion
function replicate(times, number) {
  // your solution here
  return times > 0 ? [...replicate(times - 1, number), number] : [];
}

console.log(replicate(3, 5), [5, 5, 5]);
console.log(replicate(5, 1), [1, 1, 1, 1, 1]);
console.log(replicate(0, 12), []);
console.log(replicate(-1, 12), []);
console.log(replicate(8, 0), [0, 0, 0, 0, 0, 0, 0, 0]);
