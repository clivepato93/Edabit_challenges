// https://www.codewars.com/kata/55eea63119278d571d00006a/train/javascript
// algorithms recursion
function nextId(ids, num = 0) {
  if (!ids.includes(num)) {
    return num;
  }

  return nextId(ids, num + 1);
}

console.log(nextId([0, 1, 2, 3, 5]), 4);

console.log(nextId([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 11);

console.log(nextId([1, 2, 0, 2, 3, 5]), 4);
