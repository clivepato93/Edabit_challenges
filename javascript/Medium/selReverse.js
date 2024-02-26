// https://www.codewars.com/kata/58f6000bc0ec6451960000fd/train/javascript

function selReverse(array, length) {
  // TODO
  if (!length) return array;
  const newArr = [];
  for (let i = 0; i < array.length; i += length) {
    debugger;
    const elements = array.slice(i, i + length).reverse();
    console.log(elements);
    newArr.push(...elements);
  }
  return newArr;
}

console.log(
  selReverse(
    [
      1, 30, 21, 24, 27, 36, 48, 46, 34, 29, 13, 25, 8, 39, 8, 44, 27, 3, 4, 24,
      10, 48, 1, 22, 41, 45,
    ],
    2
  ),
  [
    30, 1, 24, 21, 36, 27, 46, 48, 29, 34, 25, 13, 39, 8, 44, 8, 3, 27, 24, 4,
    48, 10, 22, 1, 45, 41,
  ]
);
// console.log(
//   selReverse(
//     [32, 35, 11, 3, 13, 1, 3, 10, 25, 35, 0, 15, 23, 6, 47, 10, 46, 19, 23, 15],
//     6
//   )
// );
// console.log(
//   selReverse([2, 4, 6, 8, 10, 12, 14, 16], 3),
//   [6, 4, 2, 12, 10, 8, 16, 14]
// );
// console.log(selReverse([1, 2, 3, 4, 5, 6], 2, [2, 1, 4, 3, 6, 5]));
// console.log(selReverse([1, 2, 3, 4, 5, 6], 0, [1, 2, 3, 4, 5, 6]));
// console.log(selReverse([1, 2, 3, 4, 5, 6], 1, [1, 2, 3, 4, 5, 6]));
// console.log(selReverse([1, 2, 3, 4, 5, 6], 10, [6, 5, 4, 3, 2, 1]));
