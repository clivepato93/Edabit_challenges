// https://www.codewars.com/kata/56ed5f13c4e5d6c5b3000745/train/javascript

function cheapestQuote(n) {
  let total = 0;
  while (n) {
    if (n >= 40) {
      n -= 40;
      total += 3.85;
    } else if (n >= 20) {
      n -= 20;
      total += 1.93;
    } else if (n >= 10) {
      n -= 10;
      total += 0.97;
    } else if (n >= 5) {
      n -= 5;
      total += 0.49;
    } else {
      n -= 1;
      total += 0.1;
    }
  }
  return Math.round(total * 100) / 100;
}

console.log(cheapestQuote(40), 3.85);
console.log(cheapestQuote(20), 1.93);
console.log(cheapestQuote(10), 0.97);
console.log(cheapestQuote(5), 0.49);
console.log(cheapestQuote(1), 0.1);

console.log(
  cheapestQuote(41),
  3.95,
  "41 newspapers should be priced as 40 bundle and a 1 bundle"
);
console.log(
  cheapestQuote(80),
  7.7,
  "80 newspapers should be priced as two 40 bundles"
);
console.log(
  cheapestQuote(26),
  2.52,
  "26 newspapers should be priced as a 20 bundle, a 5 bundle and a 1 bundle"
);
