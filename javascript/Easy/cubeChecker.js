// codewars.com/kata/58d248c7012397a81800005c/train/javascript

var cubeChecker = function (volume, side) {
  return volume > 0 && side > 0 && side * side * side === volume;
};

console.log(cubeChecker(125, 5), true);
