// https://www.codewars.com/kata/5a005f4fba2a14897f000086/train/javascript

function sumItUp(nums) {
  return nums.reduce((t, c) => parseInt(c[0], c[1]) + t, 0);
}

console.log(
  sumItUp([
    ["101", 2],
    ["10", 8],
  ]),
  13
);
console.log(
  sumItUp([
    ["ABC", 16],
    ["11", 2],
  ]),
  2751
);
console.log(
  sumItUp([
    ["101", 16],
    ["7640", 8],
    ["1", 9],
  ]),
  4258
);
