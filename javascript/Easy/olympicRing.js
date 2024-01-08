// https://www.codewars.com/kata/57d06663eca260fe630001cc/train/javascript
const obj = {
  a: 1,
  A: 1,
  b: 1,
  B: 2,
  d: 1,
  D: 1,
  e: 1,
  g: 1,
  p: 1,
  P: 1,
  o: 1,
  Q: 1,
  O: 1,
  q: 1,
  R: 1,
};
function olympicRing(a) {
  let t = 0;
  for (let i = 0; i < a.length; i++) {
    t += obj[a[i]] || 0;
  }
  t = Math.floor(t / 2);
  return t > 3
    ? "Gold!"
    : t == 3
    ? "Silver!"
    : t == 2
    ? "Bronze!"
    : "Not even a medal!";
}

console.log(olympicRing("wHjMudLwtoPGocnJ"), "Bronze!");
console.log(olympicRing("eCEHWEPwwnvzMicyaRjk"), "Bronze!");
console.log(olympicRing("JKniLfLW"), "Not even a medal!");
