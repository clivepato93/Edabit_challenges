// https://www.codewars.com/kata/55a4f9afeffe4231090000d6/train/javascript
// ES6 isSafeInteger
function SafeInteger(n) {
  return Number.isSafeInteger(n);
}

console.log(
  SafeInteger(9007199254740992),
  false,
  "Value returned should be false"
);
console.log(
  SafeInteger(9007199254740990),
  true,
  "Value returned should be true"
);
