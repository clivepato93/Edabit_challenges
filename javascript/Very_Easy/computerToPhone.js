// https://www.codewars.com/kata/5572392fee5b0180480001ae/train/javascript
function computerToPhone(numbers) {
  // ...
  const digits = { 1: 7, 2: 8, 3: 9, 4: 4, 5: 5, 6: 6, 0: 0, 7: 1, 8: 2, 9: 3 };
  let string = [];
  for (let i = 0; i < numbers.length; i++) {
    string.push(digits[numbers[i]]);
  }

  return string.join("");
}

console.log(computerToPhone("0789456123"), "0123456789");
console.log(computerToPhone("000"), "000");
console.log(computerToPhone("94561"), "34567");
console.log(computerToPhone(""), "");
