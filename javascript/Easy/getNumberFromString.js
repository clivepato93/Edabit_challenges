// https://www.codewars.com/kata/57a37f3cbb99449513000cd8/train/javascript
function getNumberFromString(s) {
  // Math The unary plus operator ( + ) will convert a string into a number
  // Could of also used Number constructor Number()
  // REGEX
  return +s.match(/[0-9]/g).join("");
}

console.log(getNumberFromString("1"), 1);
console.log(getNumberFromString("123"), 123);
console.log(getNumberFromString("this is number: 7"), 7);
