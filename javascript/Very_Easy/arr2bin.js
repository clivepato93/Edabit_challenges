//www.codewars.com/kata/57642a90dee2da8dd3000161/train/javascript

function arr2bin(arr) {
  // toString(2) converts the number to a binary number
  return arr
    .reduce((t, c) => (typeof c !== "number" ? t : (t += c)), 0)
    .toString(2);
}

console.log(arr2bin([1, 2]), "11");
console.log(arr2bin([1, 2, 3, 4, 5]), "1111");
console.log(arr2bin([1, 10, 100, 1000]), "10001010111");
console.log(arr2bin([null]), "0");
console.log(arr2bin([true, true, false, 15]), "1111");
