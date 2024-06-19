// https://www.codewars.com/kata/5aefd0a686d075d5f3000091/train/javascript
// TODO
function cookingTime(neededPower, minutes, seconds, power) {
  // Your code here
  const [x, y] = [+neededPower.slice(0, -1), +power.slice(0, -1)];
  console.log(Math.round((x / y) * minutes), (x / y) * seconds);
  // , y / x / seconds);
}

console.log(cookingTime("600W", 4, 20, "800W"), "3 minutes 15 seconds");
console.log(cookingTime("800W", 3, 0, "1200W"), "2 minutes 0 seconds");
console.log(
  cookingTime("100W", 8, 45, "50W"),
  "1getNewNotes7 minutes 30 seconds"
);
console.log(cookingTime("7500W", 0, 5, "600W"), "1 minutes 3 seconds");
console.log(cookingTime("450W", 3, 25, "950W"), "1 minutes 38 seconds");
console.log(cookingTime("21W", 64, 88, "25W"), "55 minutes 0 seconds");
console.log(cookingTime("83W", 61, 80, "26W"), "199 minutes 0 seconds");
console.log(cookingTime("38W", 95, 22, "12W"), "302 minutes 0 seconds");
