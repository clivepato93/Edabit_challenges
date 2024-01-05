// https://www.codewars.com/kata/5a84d485742ba347b90006b7/train/javascript

function howManyGifts(maxBudget, gifts) {
  // your code goes here
  let num = 0;
  gifts = gifts.sort((a, b) => b - a);
  while (maxBudget - gifts[gifts.length - 1] >= 0) {
    maxBudget -= gifts.pop();
    num++;
  }
  return num;
}

console.log(howManyGifts(20, [13, 2, 4, 6, 1]), 4);

console.log(howManyGifts(0, [1]), 0);
