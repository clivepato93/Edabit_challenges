// https://www.codewars.com/kata/56b12e3ad2387de332000041/train/javascript
// strings eval
function diff(str) {
  //code here
  const results = str.map((expr) => Math.abs(eval(`${expr}`)));
  return Math.max(...results) > 0
    ? str[results.indexOf(Math.max(...results))]
    : false;
}

function diff(str) {
  //code here
  let currDiff = 0;
  let index = 0;
  //   const results = str.map((expr) => Math.abs(eval(`${expr}`)));
  for (let i = 0; i < str.length; i++) {
    const result = Math.abs(eval(`${str[i]}`));
    if (result > currDiff) {
      currDiff = result;
      index = i;
    }
  }
  return currDiff > 0 ? str[index] : false;
}

console.log(diff(["23-32", "32-23", "2-6", "98-98", "100-101"]), "23-32");
console.log(diff(["22-22", "56-56"]), false);
console.log(diff(["52542-522", "0-1000000"]), "0-1000000");
