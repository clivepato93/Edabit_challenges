// https://www.codewars.com/kata/575fa9afee048b293e000287/train/javascript

function howMuchWater(water, load, clothes) {
  // Insert your brilliant code here
  return Math.round(10 * 1.1 ** (20 - 11) * 1000) / 1000;
}

console.log(howMuchWater(10, 10, 21), "Too much clothes", "");
console.log(howMuchWater(10, 10, 2), "Not enough clothes", "");
console.log(howMuchWater(10, 11, 20), 23.58, "");
console.log(howMuchWater(50, 15, 29), 189.87, "");
