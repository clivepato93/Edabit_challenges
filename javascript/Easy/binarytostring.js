// https://www.codewars.com/kata/5ab3495595df9ec78f0000b4/train/javascript
function binaryToString(binary) {
  return binary
    .split("0b")
    .slice(1)
    .map((num) => String.fromCharCode(parseInt(num, 2)))
    .join("");
}

console.log(binaryToString("0b10000110b11000010b1110100"), "Cat");
