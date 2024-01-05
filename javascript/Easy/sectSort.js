// https://www.codewars.com/kata/58ef87dc4db9b24c6c000092/train/javascript

function sectSort(arr, start, length = null) {
  // your code here
  const sect = arr
    .slice(start, length ? length + start : arr.length)
    .sort((a, b) => a - b);
  //   console.log(sect);
  if (!length) {
    return arr.slice(0, start).concat(sect);
  }
  return arr
    .slice(0, start)
    .concat(sect)
    .concat(arr.slice(start + length));
}

// console.log(
//   sectSort([1, 2, 5, 7, 4, 6, 3, 9, 8], 2),
//   [1, 2, 3, 4, 5, 6, 7, 8, 9],
//   "oops! wrong result"
// );
// console.log(
//   sectSort([9, 7, 4, 2, 5, 3, 1, 8, 6], 2, 5),
//   [9, 7, 1, 2, 3, 4, 5, 8, 6],
//   "oops! wrong result"
// );
// console.log(
//   sectSort(
//     [3, 6, 13, 12, 14, 18, 9, 17, 15, 2, 13, 5, 19, 2, 12, 16, 11, 7, 4, 3],
//     5
//   ),
//   [3, 6, 13, 12, 14, 2, 2, 3, 4, 5, 7, 9, 11, 12, 13, 15, 16, 17, 18, 19]
// );

console.log(
  sectSort(
    [14, 15, 0, 17, 3, 13, 8, 18, 18, 11, 17, 11, 3, 11, 1, 6, 5, 12, 4, 1],
    3,
    9
  ),
  [14, 15, +0, 3, 8, 11, 11, 13, 17, 17, 18, 18, 3, 11, 1, 6, 5, 12, 4, 1]
);
