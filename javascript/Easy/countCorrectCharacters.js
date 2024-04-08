// https://www.codewars.com/kata/5912ded3f9f87fd271000120/train/javascript

function countCorrectCharacters(correctWord, guess) {
  // Code here
  if (correctWord == guess) return guess.length;
  if (correctWord.length != guess.length) throw Error("error");
  let total = 0;

  for (let i = 0; i < guess.length; i++) {
    total += guess[i] == correctWord[i] ? 1 : 0;
  }
  return total;
}
