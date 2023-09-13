// https://edabit.com/challenge/8bNad58igHWorsf6S
// binary to number
function binaryToDecimal(binary) {
  return parseInt(binary.join(""), 2);
}

console.log(binaryToDecimal([1, 1, 1, 1, 1, 1, 1, 1]), 255);
console.log(binaryToDecimal([0, 0, 0, 0, 0, 0, 0, 0]), 0);
console.log(binaryToDecimal([1, 0, 1, 1, 1, 1, 0, 0]), 188);
console.log(binaryToDecimal([1, 0, 1, 1, 0, 1, 0, 1]), 181);
