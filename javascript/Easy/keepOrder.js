// codewars.com/kata/582aafca2d44a4a4560000e7/train/javascript

function keepOrder(ary, val) {
  // your code here
  const index = ary.indexOf(ary.find((num) => num >= val));
  return index < 0 ? ary.length : index;
}

// improvement
function keepOrder(ary, val) {
  let idx = ary.findIndex((x) => val <= x);
  return idx < 0 ? ary.length : idx;
}

console.log(keepOrder([1, 2, 3, 4, 7], 5), 4);
console.log(keepOrder([1, 2, 3, 4, 7], 0), 0);
console.log(keepOrder([1, 1, 2, 2, 2], 2), 2);
console.log(keepOrder([1, 2, 3, 4], 5), 4);
console.log(keepOrder([1, 2, 3, 4], -1), 0);
console.log(keepOrder([1, 2, 3, 4], 2), 1);
console.log(keepOrder([1, 2, 3, 4], 0), 0);
console.log(keepOrder([1, 2, 3, 4], 1), 0);
console.log(keepOrder([1, 2, 3, 4], 2), 1);
console.log(keepOrder([1, 2, 3, 4], 3), 2);
console.log(keepOrder([-5, -4, -2, -1, 1, 2], -2), 2);
