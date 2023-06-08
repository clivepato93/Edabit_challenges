// https://www.codewars.com/kata/5993fb6c4f5d9f770c0000f2/train/javascript
function sumNoDuplicates(numList) {
  return numList.reduce(
    (t, c, i) =>
      numList.indexOf(c) === numList.lastIndexOf(c) ? (t += c) : (t = t),
    0
  );
}

console.log(sumNoDuplicates([1, 1, 2, 3]), 5);
