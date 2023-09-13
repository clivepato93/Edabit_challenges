// https://www.codewars.com/kata/5868812b15f0057e05000001/train/javascript

function tailSwap(arr) {
  // your code here
  const keys = arr.map((key) => key.split(":")[0]);
  const vals = arr.map((key) => key.split(":")[1]).reverse();
  return keys.map((key, i) => key + ":" + vals[i]);
}

console.log(tailSwap(["abc:123", "cde:456"], ["abc:456", "cde:123"]));
console.log(tailSwap(["a:12345", "777:xyz"], ["a:xyz", "777:12345"]));
