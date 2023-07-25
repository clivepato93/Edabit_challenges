// https://www.codewars.com/kata/5b39e91ee7a2c103300018b3/train/javascript

function removeConsecutiveDuplicates(string) {
  const words = string.split(" ");
  const finalWords = [];
  for (let i = 0; i < words.length; i++) {
    if (finalWords[finalWords.length - 1] !== words[i]) {
      finalWords.push(words[i]);
    }

    console.log(finalWords);
  }
  return finalWords.join(" ");
}

// console.log(removeConsecutiveDuplicates(""), "");
// console.log(removeConsecutiveDuplicates("alpha"), "alpha");
// console.log(
//   removeConsecutiveDuplicates("alpha alphaalpha alphaalphaalpha"),
//   "alpha alphaalpha alphaalphaalpha"
// );
console.log(
  removeConsecutiveDuplicates(
    "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
  ),
  "alpha beta gamma delta alpha beta gamma delta"
);
// console.log(removeConsecutiveDuplicates("alpha alpha alpha alpha"), "alpha");
// console.log(
//   removeConsecutiveDuplicates("alpha beta alpha"),
//   "alpha beta alpha"
// );
// console.log(
//   removeConsecutiveDuplicates("alpha alphabeta alphagamma"),
//   "alpha alphabeta alphagamma"
// );
// console.log(
//   removeConsecutiveDuplicates("alpha alpha beta alpha alpha"),
//   "alpha beta alpha"
// );
// console.log(removeConsecutiveDuplicates("alpha beta beta"), "alpha beta");
