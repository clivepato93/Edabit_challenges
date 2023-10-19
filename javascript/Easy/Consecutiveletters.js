// https://www.codewars.com/kata/5ce6728c939bf80029988b57/train/javascript

function solve(s) {
  //..
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  s = [...s].sort().join("");
  //   console.log(s);
  for (let i = 0; i < s.length - 1; i++) {
    const current = alphabet.indexOf(s[i].toUpperCase());
    const next = alphabet.indexOf(s[i + 1].toUpperCase());

    if (next - current !== 1) return false;
  }
  return true;
}

console.log(solve("abc"), true);
console.log(solve("abd"), false);
console.log(solve("dabc"), true);
console.log(solve("abbc"), false);
