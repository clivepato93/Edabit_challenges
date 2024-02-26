// https://www.codewars.com/kata/5731861d05d14d6f50000626/train/javascript

function bigToSmall(arr) {
  //coding here...
  const newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    debugger;
    for (let j = arr[i].length - 1; j >= 0; j--) {
      newArr.push(arr[i][j]);
    }
  }
  return newArr.sort((a, b) => b - a).join(">");
}

console.log(
  bigToSmall([
    [1, 2],
    [3, 4],
    [5, 6],
  ]),
  "6>5>4>3>2>1"
);
// console.log(
//   bigToSmall([
//     [1, 3, 5],
//     [2, 4, 6],
//   ]),
//   "6>5>4>3>2>1"
// );
// console.log(bigToSmall([[1, 1], [1], [1, 1]]), "1>1>1>1>1");
