//https://www.codewars.com/kata/578553c3a1b8d5c40300037c/train/javascript


const binaryArrayToNumber = arr => parseInt(arr.join(''),2)

console.log(binaryArrayToNumber([0,0,0,1]), 1);
console.log(binaryArrayToNumber([0,0,1,0]), 2);
console.log(binaryArrayToNumber([1,1,1,1]), 15);
console.log(binaryArrayToNumber([0,1,1,0]), 6);