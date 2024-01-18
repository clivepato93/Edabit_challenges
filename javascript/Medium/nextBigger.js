//www.codewars.com/kata/55983863da40caa2c900004e/train/javascript

function nextBigger(n) {
  //your code here
  let numString = [...`${n}`];
  for (let i = numString.length - 1; i > 0; i--) {
    if (numString[i] != "0" && numString[i] > numString[i - 1]) {
      [numString[i], numString[i - 1]] = [numString[i - 1], numString[i]];
      return +numString.join("");
    }
  }
  return -1;
}

console.log(nextBigger(12), 21);
console.log(nextBigger(513), 531);
console.log(nextBigger(2017), 2071);
console.log(nextBigger(414), 441);
console.log(nextBigger(144), 414);
