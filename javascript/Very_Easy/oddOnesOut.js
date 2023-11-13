// https://www.codewars.com/kata/5d376cdc9bcee7001fcb84c0/train/javascript
// Arrays
function oddOnesOut(nums) {
  // your code here
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    const key = nums[i];
    //checking if key exists in the object
    obj[key] ? (obj[key] += 1) : (obj[key] = 1);
  }

  return nums.filter((num) => {
    const key = `${num}`;
    if (obj[key] % 2 == 0) {
      return num;
    }
  });
}

console.log(oddOnesOut([1, 2, 3, 1, 3, 3]), [1, 1]);
// console.log(oddOnesOut([75, 68, 75, 47, 68]), [75, 68, 75, 68]);
// console.log(oddOnesOut([42, 72, 32, 4, 94, 82, 67, 67]), [67, 67]);
// console.log(
//   oddOnesOut([100, 100, 5, 5, 100, 50, 68, 50, 68, 50, 68, 5, 100]),
//   [100, 100, 100, 100]
// );
// console.log(
//   oddOnesOut([82, 86, 71, 58, 44, 79, 50, 44, 79, 67, 82, 82, 55, 50]),
//   [44, 79, 50, 44, 79, 50]
// );
