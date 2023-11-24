// https://www.codewars.com/kata/559576d984d6962f8c00003c/train/javascript

function arr2bin(arr) {
  //GET STARTED
  // Number to binary use toString()
  return arr.some((val) => typeof val !== "number")
    ? false
    : `${+arr.reduce((total, c) => (total += c), 0).toString(2)}`;
}
console.log(arr2bin([1, 2]), "11");
console.log(arr2bin([1, 2, 3, 4, 5]), "1111");
console.log(arr2bin([1, 10, 100, 1000]), "10001010111");
