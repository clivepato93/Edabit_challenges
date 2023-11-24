// https://www.codewars.com/kata/57ad85bb7cb1f3ae7c000039/train/javascript

function numbersWithDigitInside(x, d) {
  const arr = Array.from({ length: x }, (_, i) => i + 1).filter(
    (num) => `${num}`.indexOf(`${d}`) > -1
  );
  return [
    arr.length,
    arr.length ? arr.reduce((t, c) => t + c, 0) : 0,
    arr.length ? arr.reduce((t, c) => t * c, 1) : 0,
  ];
}

console.log(numbersWithDigitInside(5, 6), [0, 0, 0]);
console.log(numbersWithDigitInside(1, 0), [0, 0, 0]);
console.log(numbersWithDigitInside(7, 6), [1, 6, 6]);
console.log(numbersWithDigitInside(11, 1), [3, 22, 110]);
console.log(numbersWithDigitInside(20, 0), [2, 30, 200]);
console.log(numbersWithDigitInside(44, 4), [9, 286, 5955146588160]);
