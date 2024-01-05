// https://www.codewars.com/kata/57a4a3e653ba3346bc000810/train/javascript
function describeList(x) {
  return !x.length ? "empty" : x.length == 1 ? "singleton" : "longer";
}

console.log(describeList([]), "empty");
console.log(describeList([1]), "singleton");
console.log(describeList([1, 2]), "longer");
console.log(describeList([]), "empty");
console.log(describeList([1.5]), "singleton");
console.log(describeList([1.5, 2.5]), "longer");
