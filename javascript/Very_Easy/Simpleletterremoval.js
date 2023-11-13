// https://www.codewars.com/kata/5b728f801db5cec7320000c7/train/javascript

const alphabetLow = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function solve(s, k) {
  //..
  let position = 0;
  while (k > 0) {
    if (s === "") {
      break;
    }
    const x = new RegExp(alphabetLow[position]);
    if (x.test(s)) {
      s = s.replace(x, "");
      k--;
      //   console.log(x, s, k);
    } else {
      position++;
      //   console.log(position);
    }
  }
  return s;
}

console.log(solve("abracadabra", 1), "bracadabra");
// console.log(solve("abracadabra", 2), "brcadabra");
// console.log(solve("abracadabra", 6), "rcdbr");
// console.log(solve("abracadabra", 8), "rdr");
// console.log(solve("abracadabra", 50), "");
