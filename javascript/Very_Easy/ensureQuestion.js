// https://www.codewars.com/kata/5866fc43395d9138a7000006/train/javascript
// Regex
function ensureQuestion(s) {
  // Code here
  if (/\?$/.test(s)) return s;
  return s + "?";
}

console.log(ensureQuestion(""), "?", "Expected: '?'");
console.log(ensureQuestion("Yes"), "Yes?", "Expected: '?'");
console.log(ensureQuestion("No?"), "No?", "Expected: '?'");
