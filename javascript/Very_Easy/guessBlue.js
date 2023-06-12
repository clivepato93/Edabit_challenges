// www.codewars.com/kata/5862f663b4e9d6f12b00003b/train/javascript

function guessBlue(blueStart, redStart, bluePulled, redPulled) {
  // Probability
  /* Formula first requires to calculate how many marbles are left
  Next to get the probability of a blue marble next I would calculate
  how many blue ones are left and divide with how many total marbles are left
  */
  const blueLeft = blueStart - bluePulled;
  const redLeft = redStart - redPulled;
  const marblesLeft = blueLeft + redLeft;
  return blueLeft / marblesLeft;
}

console.log(guessBlue(5, 5, 2, 3), 0.6);
console.log(guessBlue(5, 7, 4, 3), 0.2);
console.log(guessBlue(12, 18, 4, 6), 0.4);
