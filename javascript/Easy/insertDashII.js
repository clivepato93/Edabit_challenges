// https://www.codewars.com/kata/55c3026406402936bc000026/train/javascript

function insertDashII(num) {
  //code me
  // positive lookahead
  return `${num}`
    .replace(/[13579](?=[13579])/g, "$&-")
    .replace(/[2468](?=[2468])/g, "$&*");
}

console.log(insertDashII(454793), "4547-9-3");
console.log(insertDashII(123456), "123456");
console.log(insertDashII(40546793), "4054*67-9-3");
console.log(insertDashII(1012356895), "10123-56*89-5");
