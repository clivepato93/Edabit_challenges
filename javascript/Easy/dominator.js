// https://www.codewars.com/kata/559e10e2e162b69f750000b4/train/javascript

// Number values coerced into strings when used as a key for an object pair
function dominator(arr) {
  //code me
  const obj = {};
  arr.forEach((element) => {
    if (obj[element] == null) obj[element] = 1;
    else {
      obj[element]++;
    }
  });
  let maxValue = 0;
  for (const key in obj) {
    if (obj[key] > Math.floor(arr.length / 2)) {
      maxValue = +key;
    }
  }
  return maxValue || -1;
}

console.log(dominator([3, 4, 3, 2, 3, 1, 3, 3]), 3);
// console.log(dominator([1, 2, 3, 4, 5]), -1);
// console.log(dominator([1, 1, 1, 2, 2, 2]), -1);
// console.log(dominator([1, 1, 1, 2, 2, 2, 2]), 2);
