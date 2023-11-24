function sortByValueAndIndex(array) {
  return array
    .map((element, index) => [element, element * (index + 1)])
    .sort((a, b) => a[1] - b[1])
    .map((row) => row[0]);
}

// console.log(sortByValueAndIndex([23, 2, 3, 4, 5]), [2, 3, 4, 23, 5]);
console.log(
  sortByValueAndIndex([-9, 28, 15, -29, -29, -7, -9, -22, -6, 13]),
  [-22, -29, -29, -9, -6, -7, -9, 15, 28, 13]
);
