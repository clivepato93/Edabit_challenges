// https://www.codewars.com/kata/57403b5ad67e87b5e7000d1d/train/javascript

function bubble(arr) {
  const final = [];
  let loop = true;
  let end = arr.length;
  while (loop) {
    loop = false;
    for (let i = 0; i < end; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        loop = true;

        final.push(arr.slice());
      }
    }
  }
  return final;
}

// console.log(bubble([2, 1, 4, 3]), [
//   [1, 2, 4, 3],
//   [1, 2, 3, 4],
// ]);

console.log(bubble([1, 4, 3, 6, 7, 9, 2, 5, 8]), [
  [
    [1, 3, 4, 6, 7, 9, 2, 5, 8],
    [1, 3, 4, 6, 7, 2, 9, 5, 8],
    [1, 3, 4, 6, 7, 2, 5, 9, 8],
    [1, 3, 4, 6, 7, 2, 5, 8, 9],
    [1, 3, 4, 6, 2, 7, 5, 8, 9],
    [1, 3, 4, 6, 2, 5, 7, 8, 9],
    [1, 3, 4, 2, 6, 5, 7, 8, 9],
    [1, 3, 4, 2, 5, 6, 7, 8, 9],
    [1, 3, 2, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
  ],
]);
