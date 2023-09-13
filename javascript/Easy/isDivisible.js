// https://www.codewars.com/kata/558ee8415872565824000007/train/javascript

function isDivisible(x) {
  //Write your code here
  const [num, ...numbers] = [...arguments];
  for (let i = 0; i < numbers.length; i++) {
    const currentNum = numbers[i];
    if (num % currentNum) return false;
  }
  return true;
}

console.log(isDivisible(3, 3, 4), false);
console.log(isDivisible(12, 3, 4), true);
console.log(isDivisible(8, 3, 4, 2, 5), false);
