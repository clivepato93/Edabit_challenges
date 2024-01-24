// https://codewars.com/kata/55a8a36703fe4c45ed00005b/train/javascript

function multiple(x) {
  // Good Luck
  if (x % 3 == 0 && x % 5 == 0) return "BangBoom";
  if (x % 5 == 0) return "Boom";
  if (x % 3 == 0) return "Bang";
  return "Miss";
}

console.log(multiple(30), "BangBoom");
console.log(multiple(3), "Bang");
console.log(multiple(98), "Miss");
console.log(multiple(65), "Boom");
console.log(multiple(23), "Miss");
console.log(multiple(15), "BangBoom");
