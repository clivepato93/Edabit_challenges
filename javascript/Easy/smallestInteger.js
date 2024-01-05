// https://www.codewars.com/kata/58fd96a59a9f65c2e900008d/train/javascript

function smallestInteger(matrix) {
  const arr = [...new Set(matrix)]
    .flat()
    .sort((a, b) => a - b)
    .filter((num) => num > -1);
  console.log(arr);
  if (arr[0] !== 0) return 0;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    const next = arr[i + 1];
    const sum = next - element;
    if (sum < 2) {
      continue;
    } else {
      return element + 1;
    }
  }
  return arr[arr.length - 1] + 1;
}

// console.log(
//   smallestInteger([
//     [0, 2],
//     [5, 1],
//   ]),
//   3
// );
console.log(
  smallestInteger([
    [35, 26, -2, -4, 0],
    [39, 5, 17, 27, 19],
    [9, 10, 27, 48, 32],
    [-1, 16, -1, 49, 48],
    [15, -5, 4, 12, 40],
    [31, 19, 17, 4, 46],
    [3, 49, 41, 25, 44],
    [-3, -5, 25, 14, 14],
    [42, 35, 38, 7, -3],
    [42, 21, 37, 30, 4],
  ]),
  1
);
