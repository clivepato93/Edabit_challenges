// https://www.codewars.com/kata/56b97b776ffcea598a0006f2/train/javascript

function bubblesortOnce(a) {
  let result = [...a];
  for (let index = 0; index < result.length - 1; index++) {
    if (result[index] > result[index + 1]) {
      [result[index], result[index + 1]] = [result[+1], result[i]];
    }
  }

  return result;
}

console.log(bubblesortOnce([1, 2]), [1, 2]);

console.log(bubblesortOnce([103, 87, 113]), [87, 103, 113]);

console.log(bubblesortOnce([1032, 3192, 2864]), [1032, 2864, 3192]);

// console.log(bubblesortOnce([2, 4, 1]), [2, 1, 4]);

// console.log(bubblesortOnce([1, 2]), [1, 2]);

console.log(
  bubblesortOnce([9, 7, 5, 3, 1, 2, 4, 6, 8]),
  [7, 5, 3, 1, 2, 4, 6, 8, 9]
);
