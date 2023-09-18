// https://www.codewars.com/kata/5436f26c4e3d6c40e5000282/train/javascript

function sumOfN(n) {
  // insert here your code
  const indexes = [];
  const nums = [];

  for (let i = 0; i <= Math.abs(n); i++) {
    //   console.log(nums.reduce((t, c) => t + c, i - (i === 0 ? 0 : 1)));
    indexes.push(i);
    if (i == 0) {
      nums.push(i);
    } else {
      const total = indexes.reduce((t, c) => t + c, 0);
      nums.push(n > -1 ? indexes.reduce((t, c) => t + c, 0) : -total);
    }
  }

  return nums;
}

// console.log(sumOfN(3), [0, 1, 3, 6]);
console.log(sumOfN(-4), [0, -1, -3, -6, -10]);
// console.log(sumOfN(1), [0, 1]);
// console.log(sumOfN(-6), [0, -1, -3, -6, -10, -15, -21]);
