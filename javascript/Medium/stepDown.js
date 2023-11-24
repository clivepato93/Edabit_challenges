// https://www.codewars.com/kata/577ff873d648a1c5a9000143/train/javascript
// function stepDown(stair, width, arr = [stair]) {
//   //Godspeed
//   return stair - width > -1
//     ? stepDown(stair - width, width, (arr = [stair - width, ...arr]))
//     : arr;
// }

// recursion
function stepDown(stair, width) {
  console.log(stair, width);
  return stair >= 0 ? [...stepDown(stair - width, width), stair] : [];
}

console.log(
  stepDown(10, 1),
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  "Not the right stairs"
);
console.log(
  stepDown(80, 10),
  [0, 10, 20, 30, 40, 50, 60, 70, 80],
  "Not the right stairs"
);
console.log(stepDown(49, 10), [9, 19, 29, 39, 49], "Not the right stairs");
console.log(
  stepDown(5, 7),
  [5],
  "You can't make a step without falling in to the lava"
);
