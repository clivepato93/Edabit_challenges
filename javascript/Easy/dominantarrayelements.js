// https://www.codewars.com/kata/5a04133e32b8b998dc000089/train/javascript

function solve(arr) {
  // TODO
  return arr.filter((num, i, arr) => num > Math.max(...arr.slice(i + 1)));
}

console.log(solve([16, 17, 14, 3, 14, 5, 2]), [17, 14, 5, 2]);
