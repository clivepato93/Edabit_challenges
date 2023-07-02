// https://www.codewars.com/kata/587c2d08bb65b5e8040004fd/train/javascript
// Average toFixed Maths
function pointsPer48(ppg, mpg) {
  if (!ppg || !mpg) return 0;
  return +((ppg / mpg) * 48).toFixed(1);
}

console.log(pointsPer48(12, 20), 28.8);
console.log(pointsPer48(10, 10), 48.0);
console.log(pointsPer48(5, 17), 14.1);
console.log(pointsPer48(0, 0), 0);
console.log(pointsPer48(30.8, 34.7), 42.6); // Russell Westbrook 1/15/17
console.log(pointsPer48(22.9, 33.8), 32.5); // Kemba Walker 1/15/17
