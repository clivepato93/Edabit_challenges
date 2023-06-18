//https://www.codewars.com/kata/59c1302ecb7fb48757000013/train/javascript
// typeof
const typeValidation = (variable, type) => typeof variable === type;

console.log(typeValidation(42, "number"), true);
console.log(typeValidation("42", "number"), false);
