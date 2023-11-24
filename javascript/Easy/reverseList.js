// https://www.codewars.com/kata/57a04da9e298a7ee43000111/train/javascript

function reverseList(arr) {
  return arr.reduceRight((a, b) => a.concat(b), []);
}

console.log(reverseList([]), []);
console.log(reverseList([1, 2, 3]), [3, 2, 1]);
