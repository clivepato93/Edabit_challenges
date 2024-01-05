// https://www.codewars.com/kata/598f76a44f613e0e0b000026/train/javascript
// Regex \d+ to find mutiple matches of digits
function sumOfIntegersInString(s) {
  const nums = s.match(/\d+/g);
  return nums ? nums.reduce((t, c) => t + +c, 0) : 0;
}
