// https://www.codewars.com/kata/572059afc2f4612825000d8a/train/javascript
// Switch
function howManydays(month) {
  const d31 = 31;
  const d30 = 30;
  switch (month) {
    case 1:
      return d31;
    case 3:
      return d31;
    case 5:
      return d31;
    case 7:
      return d31;
    case 8:
      return d31;
    case 10:
      return d31;
    case 12:
      return d31;
    case 4:
      return d30;
    case 6:
      return d30;
    case 9:
      return d30;
    case 11:
      return d30;
    default:
      return 28;
  }
}

console.log(howManydays(1), 31);
console.log(howManydays(2), 28);
console.log(howManydays(3), 31);
console.log(howManydays(4), 30);
console.log(howManydays(12), 31);
