// https://www.codewars.com/kata/5951d30ce99cf2467e000013/train/javascript

function isPythagoreanTriple(integers) {
  // Good luck friends!
  const [a, b, c] = integers.sort((a, b) => a - b);
  return a ** 2 + b ** 2 == c ** 2 && true;
}

console.log(isPythagoreanTriple([3, 4, 5]), true);
console.log(isPythagoreanTriple([3, 5, 9]), false);
