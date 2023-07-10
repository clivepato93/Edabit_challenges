// https://www.codewars.com/kata/5803956ddb07c5c74200144e/train/javascript

function datingRange(age) {
  //return min-max
  return `${
    age <= 14 ? Math.floor(age - 0.1 * age) : Math.floor(age / 2 + 7)
  }-${age <= 14 ? Math.floor(age + 0.1 * age) : (age - 7) * 2}`;
}

console.log(datingRange(17), "15-20");
console.log(datingRange(40), "27-66");
console.log(datingRange(15), "14-16");
console.log(datingRange(35), "24-56");
console.log(datingRange(10), "9-11");
