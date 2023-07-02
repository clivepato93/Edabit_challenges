//Enumerable Magic
//https://www.codewars.com/kata/545991b4cbae2a5fda000158/train/javascript

function include(arr, item) {
  // ...
  return arr.includes(item);
}

// console.log(include([1, 2, 3, 4], 3), true);
// console.log(include([1, 2, 4, 5], 3), false);
// console.log(include([], 3), false);

function all(arr, fun) {
  // ...
  return arr.every((val) => fun(val));
}

console.log(
  all([1, 2, 3, 4, 5], function (v) {
    return v < 9;
  }),
  true
);
console.log(
  all([1, 2, 3, 4, 5], function (v) {
    return v > 9;
  }),
  false
);
