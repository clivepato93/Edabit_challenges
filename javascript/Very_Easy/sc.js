// https://www.codewars.com/kata/570bcd9715944a2c8e000009/train/javascript

function sc(floor) {
  return floor <= 1
    ? ""
    : floor <= 6
    ? "Aa~ ".repeat(floor - 1) + "Pa! Aa!"
    : "Aa~ ".repeat(floor - 1) + "Pa!";
}

console.log(sc(2), "Aa~ Pa! Aa!", "good luck!");
console.log(sc(6), "Aa~ Aa~ Aa~ Aa~ Aa~ Pa! Aa!", "good luck!");
console.log(sc(7), "Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!", "good luck!");
console.log(sc(10), "Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!", "good luck!");
console.log(sc(1), "", "good luck!");
console.log(sc(-1), "", "good luck!");
