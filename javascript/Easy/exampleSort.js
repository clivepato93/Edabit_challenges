// https://codewars.com/kata/5747fcfce2fab91f43000697/train/javascript

function exampleSort(arr, eA) {
  return arr.sort((a, b) => eA.indexOf(a) - eA.indexOf(b));
}

console.log(exampleSort([1, 2, 3, 4, 5], [2, 3, 4, 1, 5]), [2, 3, 4, 1, 5]);
console.log(
  exampleSort([1, 2, 3, 3, 3, 4, 5], [2, 3, 4, 1, 5]),
  [2, 3, 3, 3, 4, 1, 5]
);
console.log(
  exampleSort([1, 2, 3, 3, 3, 5], [2, 3, 4, 1, 5]),
  [2, 3, 3, 3, 1, 5]
);
console.log(
  exampleSort([1, 2, 3, 3, 3, 5], [3, 4, 5, 6, 9, 11, 12, 13, 1, 7, 8, 2, 10]),
  [3, 3, 3, 5, 1, 2]
);
