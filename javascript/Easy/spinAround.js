// https://www.codewars.com/kata/65127141a5de2b1dcb40927e/train/javascript

function spinAround(turns) {
  // Here be dragons!
  if (!turns.length) {
    return 0;
  }
  const left = turns.filter((direction) => direction === "left").length;
  const right = turns.filter((direction) => direction === "right").length;
  return Math.floor(Math.abs(left / 4 - right / 4));
}

console.log(spinAround(["left", "right", "left", "right"]), 0);
console.log(
  spinAround([
    "right",
    "right",
    "right",
    "right",
    "right",
    "right",
    "right",
    "right",
  ]),
  2
);
console.log(spinAround(["left", "left", "left", "left"]), 1);
console.log(spinAround([]), 0);
console.log(spinAround(["left"]), 0);
console.log(spinAround(["right"]), 0);
console.log(
  spinAround(["right", "right", "right", "left", "right", "right"]),
  1
);
