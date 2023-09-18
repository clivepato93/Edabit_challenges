// www.codewars.com/kata/5892595f190ca40ad0000095/train/javascript
// strings
var mispelled = function (word1, word2) {
  if (word1 === word2) return true;
  if (Math.abs(word1.length - word2.length) > 1) return false;

  let check = 0;
  if (word1.length === word2.length) {
    for (let i = 0; i < word1.length; i++) {
      if (word1[i] !== word2[i]) check++;
    }
  }
  const wordtoLoopOver = word1.length > word2.length ? word1 : word2;
  const wordtoCompare = word1.length < word2.length ? word1 : word2;
  //   console.log(wordtoLoopOver, wordtoCompare);
  let letters = 0;
  for (let i = 0; i < wordtoLoopOver.length; i++) {
    if (wordtoLoopOver[i] === wordtoCompare[i + 1]) continue;
    if (wordtoLoopOver[i] === wordtoCompare[i - 1]) continue;
    if (wordtoLoopOver[i] === wordtoCompare[i]) continue;
    else {
      check++;
    }
  }

  return check <= 1;
};

console.log(mispelled("versed", "xersed"), true);
console.log(mispelled("versed", "applb"), false);

console.log(mispelled("versed", "v5rsed"), true);
console.log(mispelled("1versed", "versed"), true);
console.log(mispelled("versed", "versed1"), true);
console.log(mispelled("versed", "aaversed"), false);
