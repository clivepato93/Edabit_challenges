// https://www.codewars.com/kata/58552bdb68b034a1a80001fb/train/javascript
function cookPancakes(n, m) {
  //   type solution here
  if (n <= m) return 2;
  return Math.ceil((n / m) * 2);
}

console.log(cookPancakes(1, 2), 2);
console.log(cookPancakes(2, 2), 2);
console.log(cookPancakes(4, 2), 4);
console.log(cookPancakes(3, 2), 3);
