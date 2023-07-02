// https://www.codewars.com/kata/5a0be7ea8ba914fc9c00006b/train/javascript

function sakuraFall(v) {
  // your code here
  return v > 0 ? 400 / v : 0;
}

console.log(sakuraFall(5), 80);
console.log(sakuraFall(10), 40);
console.log(sakuraFall(-1), 0);
