// https://www.codewars.com/kata/592a6ad46d6c5a62b600003f/train/javascript
// Regex 
function encode(str) {
  const obj = {
    G: "A",
    D: "E",
    R: "Y",
    P: "O",
    L: "U",
    K: "I",
    A: "G",
    E: "D",
    Y: "R",
    O: "P",
    U: "L",
    I: "K",
    g: "a",
    d: "e",
    r: "y",
    p: "o",
    l: "u",
    k: "i",
    a: "g",
    e: "d",
    y: "r",
    o: "p",
    u: "l",
    i: "k",
  };

  return str.replace(/[a-z]/gi, (l) => (obj[l] ? obj[l] : l));
}

function decode(str) {
const obj = {
  A: "G",
  E: "D",
  Y: "R",
  O: "P",
  U: "L",
  I: "K",
  G: "A",
  D: "E",
  R: "Y",
  P: "O",
  L: "U",
  K: "I",
  a: "g",
  e: "d",
  y: "r",
  o: "p",
  u: "l",
  i: "k",
  g: "a",
  d: "e",
  r: "y",
  p: "o",
  l: "u",
  k: "i",
};
  return str.replace(/[a-z]/gi, (l) => (obj[l] ? obj[l] : l));
}

console.log(encode("Ala has a cat"), "Gug hgs g cgt");
   console.log(decode("Gug hgs g cgt"), "Ala has a cat");
//    console.log(encode("ABCD"), "GBCE");
//    console.log(encode("gaderypoluki"), "agedyropulik");
//    console.log(decode("agedyropulik"), "gaderypoluki");
//    console.log(decode("GBCE"), "ABCD");
