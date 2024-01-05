// https://www.codewars.com/kata/56f399b59821793533000683/train/javascript

function sortCards(array) {
  //Write your own code!
  const deck = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "T",
    "J",
    "Q",
    "K",
  ];

  return array.sort((a, b) => deck.indexOf(`${a}`) - deck.indexOf(`${b}`));
}

console.log(sortCards([3, 9, "A", 5, "T", 8, 2, 4, "Q", 7, "J", 6, "K"]), [
  "A",
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "T",
  "J",
  "Q",
  "K",
]);
console.log(sortCards(["J", "J", 2, "T", 9, 6]), [2, 6, 9, "T", "J", "J"]);
console.log(sortCards(["A", 2, 3, 4, 5, 6, 6, 7, 8, 9, "T", "J", "Q", "A"]), [
  "A",
  "A",
  2,
  3,
  4,
  5,
  6,
  6,
  7,
  8,
  9,
  "T",
  "J",
  "Q",
]);
