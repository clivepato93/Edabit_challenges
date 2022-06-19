// https://www.codewars.com/kata/586f6741c66d18c22800010a/train/javascript

const sequenceSum = (begin, end, step) => {
  // May the Force be with you
  let total = 0;
  for (begin; begin <= end; begin += step) {
    total += begin;
  }
  return total;
};

console.log(sequenceSum(2, 6, 2), 12);
console.log(sequenceSum(1, 5, 1), 15);
console.log(sequenceSum(1, 5, 3), 5);
