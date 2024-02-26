// https://www.codewars.com/kata/57a386117cb1f31890000039/train/javascript

function parseF(s) {
  const num = Number.parseFloat(s);
  return !Number.isNaN(Number.parseFloat(s)) ? num : null;
}

console.log(parseF("1"), 1.0);
