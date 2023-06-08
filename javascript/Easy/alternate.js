// codewars.com/kata/62a611067274990047f431a8/train/javascript

function alternate(n, firstValue, secondValue, arr = []) {
  // your code
  //   console.log(arr);
  if (arr.length === n) {
    return arr;
  }
  arr.push(firstValue);
  if (arr.length === n) {
    return arr;
  }
  arr.push(secondValue);
  return alternate(n, firstValue, secondValue, arr);
}

console.log(alternate(20, "blue", "red"), [
  "blue",
  "red",
  "blue",
  "red",
  "blue",
  "red",
  "blue",
  "red",
  "blue",
  "red",
  "blue",
  "red",
  "blue",
  "red",
  "blue",
  "red",
  "blue",
  "red",
  "blue",
  "red",
]);
