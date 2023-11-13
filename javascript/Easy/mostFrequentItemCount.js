// https://www.codewars.com/kata/56582133c932d8239900002e/train/javascript
// arrays
function mostFrequentItemCount(collection) {
  // Do your magic. :)
  return !collection.length
    ? 0
    : Math.max(
        ...[...new Set(collection)].map(
          (num) => collection.filter((number) => num === number).length
        )
      );
}
console.log(mostFrequentItemCount([3, -1, -1]), 2);
console.log(
  mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]),
  5
);
