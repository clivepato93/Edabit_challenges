//www.codewars.com/kata/6066ae080168ff0032c4107a/train/javascript

function maxSumBetweenTwoNegatives(array) {
  const indexes = [];
  let max = -1;
  for (let index = 0; index < array.length; index++) {
    if (array[index] < 0) {
      // console.log(index);
      indexes.push(index);
    }
  }

  for (let i = 0; i < indexes.length; i++) {
    let num = array.slice(indexes[i] + 1, indexes[i + 1]);
    // console.log(num);
  }

  for (let i = 0; i < indexes.length - 1; i++) {
    const x = array
      .slice(indexes[i] + 1, indexes[i + 1])
      .reduce((t, c) => t + c, 0);
    x > max ? (max = x) : max;
  }

  return max;
}

console.log(maxSumBetweenTwoNegatives([7, 5, 4, -8, 7, -8, 8]), 7);
console.log(maxSumBetweenTwoNegatives([-1, 6, -2, 3, 5, -7]), 8);
