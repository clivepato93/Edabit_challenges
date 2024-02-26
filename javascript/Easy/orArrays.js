// https://www.codewars.com/kata/5ac5e9aa3853da25d9000102/train/javascript

function orArrays(arr1, arr2, fill) {
  //your code here
  const arr = [];
  for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
    if (arr1[i] == undefined) {
      arr.push(fill | arr2[i]);
    } else if (arr2[i] == undefined) {
      arr.push(fill | arr1[i]);
    } else {
      arr.push(arr1[i] | arr2[i]);
    }
  }
  return arr;
}

console.log(orArrays([1, 2, 3], [1, 2, 3]), [1, 2, 3]);

console.log(orArrays([1, 2, 3], [4, 5, 6]), [5, 7, 7]);

console.log(orArrays([1, 2, 3], [1, 2]), [1, 2, 3]);

console.log(orArrays([1, 2], [1, 2, 3]), [1, 2, 3]);

console.log(orArrays([1, 2, 3], [1, 2, 3], 3), [1, 2, 3]);
