// https://www.codewars.com/kata/582f52208278c6be55000067/train/javascript
function roundToFive(numbers) {
  return numbers.map((num) => {
    const a = num % 5;
    const b = Math.round(num / 5) * 5 - num;
    const min = Math.min(a, b);
    console.log(a, b);
    return min <= 0 ? num + min : num + min;
  });
}
