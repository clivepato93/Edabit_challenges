// https://www.codewars.com/kata/5299413901337c637e000004/train/javascript

function getMissingElement(superImportantArray) {
  //TODO
  let n = 0;
  while (n < 10) {
    if (superImportantArray.indexOf(n) == -1) return n;
    n++;
  }
}

console.log(getMissingElement([0, 5, 1, 3, 2, 9, 7, 6, 4]), 8);
console.log(getMissingElement([9, 2, 4, 5, 7, 0, 8, 6, 1]), 3);
