// www.codewars.com/kata/559cc2d2b802a5c94700000c/train/javascript

function consecutive(arr) {
  //code me
  const newArr = arr.sort((a, b) => a - b);
  return newArr.reduce();
}

console.log(consecutive([4, 8, 6]), 2);
console.log(consecutive([1, 2, 3, 4]), 0);
console.log(consecutive([]), 0);
console.log(consecutive([1]), 0);
