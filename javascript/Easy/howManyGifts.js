// https://www.codewars.com/kata/5a84d485742ba347b90006b7/train/javascript

function howManyGifts(maxBudget, gifts) {
  // your code goes here
  let i = 0;
  while (maxBudget > 0) {
    if (maxBudget - gifts[i] > 0) {
      maxBudget -= gifts[i];
    } else {
    }
  }
  return i;
}

console.log(howManyGifts(20, [13, 2, 4, 6, 1]), 4);

console.log(howManyGifts(0, [1]), 0);
