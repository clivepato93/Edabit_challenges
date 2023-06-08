//www.codewars.com/kata/6066ae080168ff0032c4107a/train/javascript

function maxSumBetweenTwoNegatives(array) {
  let maxNum = 0;
  for (let index = 0; index < array.length; index++) {
    console.log(array.findIndex((x) => x < 0));
  }
  //   return maxNum;
}

console.log(maxSumBetweenTwoNegatives([-1, 6, -2, 3, 5, -7]), 8);
