// https://www.codewars.com/kata/57bd0abcb9799763f1001bdc/train/javascript

function max(array) {
  debugger;
  if (!array.length) {
    return -Infinity;
  }

  if (array.length == 1) {
    return array[0];
  }

  if (array[0] >= array[1]) {
    array.splice(1, 1);
    max(array);
    return array[0];
  }

  if (array[0] < array[1]) {
    array.splice(0, 1);
    max(array);
    return array[0];
  }
}

function max(array) {
  debugger;
  if (!array.length) {
    return -Infinity;
  }

  const [a, b] = [array[0], max(array.slice(1))];
  return a >= b ? a : b;
}

// console.log(max([1, 2, 3, 4, 5]), 5);
// console.log(max([5]), 5);
// console.log(max([]), -Infinity);
console.log(max([99, 2, 100, 4, 5]), 100);
