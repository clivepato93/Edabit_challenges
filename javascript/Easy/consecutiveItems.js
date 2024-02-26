// https://www.codewars.com/kata/5f6d533e1475f30001e47514/train/javascript

function consecutive(arr, a, b) {
  // Your code here...
  console.log(arguments);
  return arr[arr.indexOf(a) + 1] == b || arr[arr.indexOf(a) - 1] == b;
}

console.log(consecutive([1, 3, 5, 7], 3, 7), false);

console.log(consecutive([1, 3, 5, 7], 3, 1), true);

console.log(consecutive([1, 6, 9, -3, 4, -78, 0], -3, 4), true);
