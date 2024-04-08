var flatten = function (array, recursion = true, arr = []) {
  // TODO: Program me

  for (let i = 0; i < array.length; i++) {
    debugger;
    // if (i == array.length - 1) return;
    if (typeof array[i] == "object" && recursion) {
      flatten(array[i], !recursion, arr);
    } else {
      arr.push(array[i]);
    }
  }
  if (!recursion) return;
  return arr;
};

// console.log(flatten([]), []);
// console.log(flatten([1, 2, 3]), [1, 2, 3]);
// console.log(
//   flatten([
//     [1, 2, 3],
//     ["a", "b", "c"],
//     [1, 2, 3],
//   ]),
//   [1, 2, 3, "a", "b", "c", 1, 2, 3]
// );
console.log(flatten([[3, 4, 5], [[9, 9, 9]], ["a,b,c"]]), [
  3,
  4,
  5,
  [9, 9, 9],
  "a,b,c",
]);
console.log(flatten([[[3], [4], [5]], [9], [9], [8], [[1, 2, 3]]]), [
  [3],
  [4],
  [5],
  9,
  9,
  8,
  [1, 2, 3],
]);
