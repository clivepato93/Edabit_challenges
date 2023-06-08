// https://www.codewars.com/kata/55902c5eaa8069a5b4000083/train/javascript
function formatMoney(amount) {
  // your formatting code here
  const stringAmount = `${amount}`.split(".");
  //   console.log(stringAmount);
  return `$${stringAmount[0]}.${
    stringAmount[1] ? stringAmount[1].padEnd(2, "0") : "00"
  }`;
}

console.log(formatMoney(39.99), "$39.99");
