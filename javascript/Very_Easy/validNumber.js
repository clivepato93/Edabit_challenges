// https://www.codewars.com/kata/55f9064161541a9e01000001/train/javascript

function validNumber(num) {
  //return true or false;
  return /^[\d-+]*\.\d{2}$/.test(num);
}

console.log(validNumber("0.00"), true);
console.log(validNumber(".00"), true);
console.log(validNumber("-.00"), true);
console.log(validNumber(".30"), true);
console.log(validNumber("0.40"), true);
console.log(validNumber("34443.33"), true);

console.log(validNumber(".0a"), false);
console.log(validNumber("1.00."), false);
console.log(validNumber(".+00"), false);
console.log(validNumber("w.00"), false);
console.log(validNumber("..00"), false);
console.log(validNumber("1,00"), false);
