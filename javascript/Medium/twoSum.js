// https://www.codewars.com/kata/52c31f8e6605bcc646000082/train/javascript

function twoSum(numbers, target) {
  for (let index = 0; index < numbers.length; index++) {
    for (let j = index + 1; j < numbers.length; j++) {
      if (numbers[index] + numbers[j] == target) {
        return [index, j];
      }
    }
  }
}

console.log(twoSum([1, 2, 3], 4), [0, 2]);
console.log(twoSum([1234, 5678, 9012], 14690), [1, 2]);
