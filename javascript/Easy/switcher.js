// https://www.codewars.com/kata/57ebaa8f7b45ef590c00000c/train/javascript

function switcher(x) {
  const punc = [" ", "?", "!"];

  const newArr = x.map((element) => {
    const num = +element;
    // console.log(num);
    return num > 26 ? punc[29 - num] : String.fromCharCode(123 - num);
  });

  return newArr.join("");
}

console.log(
  switcher(["24", "12", "23", "22", "4", "26", "9", "8"]),
  "codewars"
);
console.log(
  switcher([
    "25",
    "7",
    "8",
    "4",
    "14",
    "23",
    "8",
    "25",
    "23",
    "29",
    "16",
    "16",
    "4",
  ]),
  "btswmdsbd kkw"
);
console.log(switcher(["4", "24"]), "wc");
