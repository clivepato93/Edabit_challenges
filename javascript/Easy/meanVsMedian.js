// https://www.codewars.com/kata/5806445c3f1f9c2f72000031/train/javascript
function meanVsMedian(numbers) {
  const median = numbers[Math.floor(numbers.length / 2)];
  const mean = numbers.reduce((t, c) => t + c, 0) / numbers.length;
  console.log(mean, median);
  return median > mean ? "median" : mean > median ? "mean" : "same";
}

console.log(meanVsMedian([-10, 20, 5]), "same");

console.log(meanVsMedian([1, 1, 1]), "same");

console.log(meanVsMedian([1, 2, 37]), "mean");

console.log(meanVsMedian([7, 14, -70]), "median");
