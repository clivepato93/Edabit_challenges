//www.codewars.com/kata/59fca81a5712f9fa4700159a/train/javascript
// Convert Integer to Binary

function toBinary(n) {
  let num = "";
  while (n >= 1) {
    num = (n % 2) + num;
    n = Math.floor(n / 2);
  }
  return +num;
}

function toBinary(n, num = "") {
  debugger;
  if (n <= 0) {
    return +num;
  }
  return toBinary(Math.floor(n / 2), (num = (n % 2) + num));
}

console.log(toBinary(1), 1);
console.log(toBinary(2), 10);
console.log(toBinary(3), 11);
console.log(toBinary(5), 101);
