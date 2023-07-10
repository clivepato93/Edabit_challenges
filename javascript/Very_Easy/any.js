// codewars.com/kata/54598e89cbae2ac001001135/train/javascript
function any(arr, fun) {
  // ...
  return arr.filter((val) => fun(val)).length > 0;
}

console.log(
  any([1, 2, 3, 4], function (v, i) {
    return v > 3;
  }),
  true
);
console.log(
  any([1, 2, 3, 4], function (v, i) {
    return v > 4;
  }),
  false
);
