// https://www.codewars.com/kata/54fdfe14762e2edf4a000a33/train/javascript
var grid = [
  "top left",
  "top middle",
  "top right",
  "middle left",
  "center",
  "middle right",
  "bottom left",
  "bottom middle",
  "bottom right",
];

function fire(x, y) {
  // YOUR CODE HERE.
  const newArr = [];
  for (let i = x; i < grid.length; i += grid.length / Math.sqrt(grid.length)) {
    newArr.push(grid[i]);
  }
  return newArr[y];
}

console.log(fire(0, 0), "top left", "YOU MISSED!");
console.log(fire(1, 2), "bottom middle", "YOU MISSED!");
