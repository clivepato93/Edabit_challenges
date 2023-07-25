// https://www.codewars.com/kata/574b1916a3ebd6e4fa0012e7/train/javascript
// Strings
function isOpposite(s1, s2) {
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] === s2[i]) return false;
  }

  return s1.length && s2.length ? s1.length === s2.length : false;
}

console.log(isOpposite("ab", "AB"), true);
console.log(isOpposite("aB", "Ab"), true);
console.log(isOpposite("aBcd", "AbCD"), true);
console.log(isOpposite("aBcde", "AbCD"), false);
console.log(isOpposite("AB", "Ab"), false);
console.log(isOpposite("", ""), false);
