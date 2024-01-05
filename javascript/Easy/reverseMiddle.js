// https://www.codewars.com/kata/5a043724ffe75fbab000009f/train/javascript

function reverseMiddle(array) {
  const start = array.length % 2 == 0 ? end - 1 : end - 2;
  const end =
    array.length % 2 == 0
      ? Math.floor(array.length / 2)
      : Math.floor(array.length / 2) + 1;
  function reverse(array, start, end) {}
  return array.slice(start, end + 1).reverse();
}

function reverseMiddle(array) {
  const end =
    array.length % 2 == 0
      ? Math.floor(array.length / 2)
      : Math.floor(array.length / 2) + 1;
  const start = array.length % 2 == 0 ? end - 1 : end - 2;
  function reverse(array, start, end) {
    debugger;
    if (start == end) {
      return [array[start]];
    }

    let newArray = reverse(array, start + 1, end);
    newArray = [...newArray, array[start]];
    return newArray;
  }
  return reverse(array, start, end);
}

// console.log(reverseMiddle([1, 2, 3, 4], [3, 2]));

console.log(reverseMiddle([1, 2, 3, 4, 5], [4, 3, 2]));
