// https://leetcode.com/problems/largest-odd-number-in-string/?envType=daily-question&envId=2023-12-07

var largestOddNumber = function (num) {
  const slice = num.match(/[13579]/g);

  return slice
    ? num.slice(0, num.lastIndexOf(slice[slice.length - 1]) + 1)
    : "";
};

console.log(largestOddNumber("52"), "5");
