// https://www.codewars.com/kata/59f061773e532d0c87000d16/train/javascript

function elevatorDistance(array) {
  // your code here
  let total = 0;
  for (let i = 0; i < array.length - 1; i++) {
    total += Math.abs(array[i] - array[i + 1]);
  }
  return total;
}

console.log(elevatorDistance([5, 2, 8]), 9);
console.log(elevatorDistance([1, 2, 3]), 2);
console.log(elevatorDistance([7, 1, 7, 1]), 18);
