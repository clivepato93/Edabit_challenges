// https://www.codewars.com/kata/5694cb0ec554589633000036/train/javascript

// my solution
// const factorial = (n, x = n - 1) => {
//   if (n == 0) {
//     return 1;
//   }
//   if (x == 1) {
//     return n;
//   }

//   return factorial(n * x, (x -= 1));
// };

// better solution
const factorial = (n) => (n > 1 ? n * factorial(n - 1) : 1);

// console.log(factorial(0), 1);

// console.log(factorial(1), 1);

// console.log(factorial(2), 2);

// console.log(factorial(3), 6);

const nums = [2, 3, 4, 5];
const newnum = 1;
const N = nums.length;
for (var i = N; i >= 0; --i) {
  console.log(nums[i]);
  nums[i] = nums[i - 1];
  console.log(nums);
}
nums[0] = newnum;
console.log(nums); // 1,2,3,4,5
