// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/solutions/javascript

function reverseWords(str) {
  const words = str
    .split(" ")
    .map((w) => [...w].reverse().join(""))
    .join(" ");
  return words;
}

// https://practice.geeksforgeeks.org/problems/reverse-words-in-a-given-string5459/1?utm_source=geeksforgeeks&utm_medium=ml_article_practice_tab&utm_campaign=article_practice_tab

function reverseWords(s) {
  // code here
  const words = s.split(".");
  for (let i = 0; i < Math.floor(words.length / 2); i++) {
    [words[i], words[words.length - (1 + i)]] = [
      words[words.length - (1 + i)],
      words[i],
    ];
  }

  return words.join(".");
}

// console.log(
//   reverseWords("The quick brown fox jumps over the lazy dog."),
//   "ehT kciuq nworb xof spmuj revo eht yzal .god"
// );
console.log(
  reverseWords("i.like.this.program.very.much"),
  "much.very.program.this.like.i"
);
