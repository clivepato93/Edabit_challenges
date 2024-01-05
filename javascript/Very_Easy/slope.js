function slope(points) {
  const num = (points[3] - points[1]) / (points[2] - points[0]);
  if (num == Number.NEGATIVE_INFINITY || num == Number.POSITIVE_INFINITY) {
    return "undefined";
  }
  // if()
  // num == -0
  // : num;
}

console.log(slope([19, 3, 20, 3]), "0");
console.log(slope([2, 7, 4, -7]), "-7");
console.log(slope([10, 50, 30, 150]), "5");
console.log(slope([15, 45, 12, 60]), "-5");
console.log(slope([10, 20, 20, 80]), "6");
console.log(slope([-10, 6, -10, 3]), "undefined");
