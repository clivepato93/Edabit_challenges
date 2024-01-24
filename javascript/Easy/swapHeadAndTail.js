// https://www.codewars.com/kata/5a34f087c5e28462d9000082/train/javascript

function swapHeadAndTail(arr) {
  // good luck
  const mid = Math.floor(arr.length / 2);
  return arr.length % 2
    ? [
        ...arr.slice((arr.length / 2) % 2 ? mid + 1 : mid),
        arr[mid],
        ...arr.slice(0, mid),
      ]
    : [...arr.slice(mid), ...arr.slice(0, mid)];
}
console.log(swapHeadAndTail([1, 2, 3, 4, 5]), [4, 5, 3, 1, 2]);
console.log(swapHeadAndTail([-1, 2]), [2, -1]);
console.log(
  swapHeadAndTail([1, 2, -3, 4, 5, 6, -7, 8]),
  [5, 6, -7, 8, 1, 2, -3, 4]
);
