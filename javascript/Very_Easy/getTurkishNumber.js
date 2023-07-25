const obj = {
  0: "sıfır",
  1: "bir",
  2: "iki",
  3: "üç",
  4: "dört",
  5: "beş",
  6: "altı",
  7: "yedi",
  8: "sekiz",
  9: "dokuz",

  10: "on",
  20: "yirmi",
  30: "otuz",
  40: "kırk",
  50: "elli",
  60: "altmış",
  70: "yetmiş",
  80: "seksen",
  90: "doksan",
};

const getTurkishNumber = (num) => {
  if (!num) return obj["0"];
  let string = [];
  const keys = Object.keys(obj).reverse();
  while (num) {
    const val = keys.find((number) => num >= number);
    string.push(obj[val]);
    num -= +val;
  }
  return string.join(" ");
};

console.log(getTurkishNumber(0), "sıfır");
console.log(getTurkishNumber(16), "on altı");
// console.log();
// console.log();
