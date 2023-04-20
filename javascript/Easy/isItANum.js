// codewars.com/kata/596343a24489a8b2a00000a2/train/javascript

function isItANum(str) {
  // your code here;
  const result = str.replace(/[\D\b]/g, "");
  const validNum = result.length === 11 && result[0] === "0";
  return validNum ? result : "Not a phone number";
}

console.log(isItANum("S:)0207ERGQREG88349F82!efRF)"), "02078834982");
console.log(isItANum("sjfniebienvr12312312312ehfWh"), "Not a phone number");
console.log(isItANum("0192387415456"), "Not a phone number");
console.log(
  isItANum("v   uf  f 0tt2eg qe0b 8rtyq4eyq564()(((((165"),
  "02084564165"
);
console.log(
  isItANum("stop calling me no I have never been in an accident"),
  "Not a phone number"
);
