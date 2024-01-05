// https://www.codewars.com/kata/562dbaf65d4ab6685c0000ed/train/javascript

function unscramble(scramble) {
  // your code here
  function reArrange(word) {
    return [...word].sort().join("");
  }
  const newWord = reArrange(scramble);
  const arr = [];
  for (let i = 0; i < wordList.length; i++) {
    if (wordList[i].length == newWord.length) {
      const word = reArrange(wordList[i]);
      if (word == newWord) arr.push(wordList[i]);
    }
  }
  return arr;
}
