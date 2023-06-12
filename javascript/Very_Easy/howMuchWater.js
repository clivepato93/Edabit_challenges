// https://www.codewars.com/kata/575fa9afee048b293e000287/train/javascript

function howMuchWater(water, load, clothes) {
  // Insert your brilliant code here
  if (clothes < load) {
    return "Not enough clothes";
  }
  if (clothes > load * 2) {
    return "Too much clothes";
  }
  return +((water * 1.1 ** (clothes - load) * 1000) / 1000).toFixed(2);
}

console.log(howMuchWater(10, 10, 21), "Too much clothes", "");
console.log(howMuchWater(10, 10, 2), "Not enough clothes", "");
console.log(howMuchWater(10, 11, 20), 23.58, "");
console.log(howMuchWater(50, 15, 29), 189.87, "");
