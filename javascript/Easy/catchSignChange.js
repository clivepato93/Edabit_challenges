// https://www.codewars.com/kata/5bbb8887484fcd36fb0020ca/train/javascript

function catchSignChange(arr) {
  // TODO
  let total = 0;
  for (let i = 1; i < arr.length; i++) {
    const prevElement = arr[i - 1];
    const nextElement = arr[i];
    if (
      (prevElement >= 0 && nextElement < 0) ||
      (prevElement < 0 && nextElement >= 0)
    ) {
      total++;
    }
  }
  return total;
}

const tests = [
  [[], 0],
  [[1, 3, 4, 5], 0],
  [[-1, -3, -4, -5], 0],
  [[1, -3, -4, 0, 5], 2],
  [[-47, 84, -30, -11, -5, 74, 77], 3],
];

for (let [input, expected] of tests) {
  console.log(catchSignChange(input), expected);
}
