// https://www.codewars.com/kata/5889177bf148eddd150002cc/train/javascript

function tiyFizzBuzz(sentence) {
  function letterReplace(letter) {
    // if (/[aieou]/.test(letter)) return letter;
    if (/[B-D-F-H-J-N-P-T-V-Z]/.test(letter)) return "Iron";
    if (/[aieou]/.test(letter)) {
      return "Yard";
    }
    if (/[AIEOU]/.test(letter)) {
      return "Iron Yard";
    }
    return letter;
  }
  return sentence.replace(/./g, letterReplace);
}

console.log(tiyFizzBuzz, "tiyFizzBuzz is not defined");
console.log(tiyFizzBuzz(" "), " ");
console.log(tiyFizzBuzz("H"), "Iron");
console.log(tiyFizzBuzz("b"), "b");
console.log(tiyFizzBuzz("A"), "Iron Yard");
console.log(tiyFizzBuzz("a"), "Yard");
console.log(
  tiyFizzBuzz("Hello WORLD!"),
  "IronYardllYard IronIron YardIronIronIron!"
);
