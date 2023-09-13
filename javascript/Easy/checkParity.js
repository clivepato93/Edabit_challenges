// https://www.codewars.com/kata/5df261342964c80028345a0a/train/javascript

function checkParity(parity, bin) {
  //Have fun!
  const ones = [...bin].filter((num) => num === "1");
  return ones.length % 2 == 0 && parity === "even"
    ? 0
    : ones.length % 2 != 0 && parity === "odd"
    ? 0
    : 1;
}

console.log(checkParity("even", "101010"), 1);
console.log(checkParity("odd", "101010"), 0);
console.log(checkParity("even", "101011"), 0);
console.log(checkParity("odd", "101011"), 1);
