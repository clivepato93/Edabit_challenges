// https://www.codewars.com/kata/51c89385ee245d7ddf000001/train/javascript

function solution(value) {
  //...
  const strNum = `${value}`;
  return "Value is " + `${"0".repeat(5 - strNum.length)}${value}`;
}
