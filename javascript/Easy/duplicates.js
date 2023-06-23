// codewars.com/kata/5558cc216a7a231ac9000022/train/javascript
// Arrays
function duplicates(arr) {
  //TODO: return the array of duplicates from arr
  return [
    ...new Set(
      arr.filter(
        (v, i, arr) =>
          arr.slice(0, i + 1).indexOf(v) !== arr.slice(0, i + 1).lastIndexOf(v)
      )
    ),
  ];
}

function duplicates(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (
      arr.slice(0, i + 1).indexOf(element) !==
        arr.slice(0, i + 1).lastIndexOf(element) &&
      !newArr.includes(element)
    ) {
      newArr.push(element);
    }
  }

  return newArr;
}

console.log(duplicates([1, 2, 3, 4, 3]), [3], "arr = [1, 2, 3, 4, 3]");
console.log(
  duplicates([1, 2, 3, 3, 2, 1]),
  [3, 2, 1],
  "arr = [1, 2, 3, 3, 2, 1]"
);
console.log(
  duplicates([1, 2, 1, 2, 1, 2, 1]),
  [1, 2],
  "arr = [1, 2, 1, 2, 1, 2, 1]"
);
