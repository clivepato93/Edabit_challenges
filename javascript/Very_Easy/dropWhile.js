// https://www.codewars.com/kata/54f9c37106098647f400080a/train/javascript
// functional programming arrays
function dropWhile(arr, pred) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (pred(element)) {
      continue;
    } else {
      newArr.push(...arr.slice(i));
      break;
    }
  }

  return newArr;
}

function isEven(num) {
  return num % 2 === 0;
}

var isEvenTests = [
  [
    [2, 6, 4, 10, 1, 5, 4, 3],
    [1, 5, 4, 3],
  ],
  [
    [2, 100, 1000, 10000, 5, 3, 4, 6],
    [5, 3, 4, 6],
  ],
  [[2, 4, 10, 100, 64, 78, 92], []],
];
