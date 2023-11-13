// https://www.codewars.com/kata/586e4c61aa0428f04e000069/train/javascript

// decimal
function getDecimal(n) {
  if (Math.round(n) === n) {
    return 0;
  }
  const newN = `${n}`;
  return Math.abs(n % 1);
  //   return +`${newN}`.slice(newN.indexOf("."));
}

console.log(getDecimal(10), 0);

console.log(getDecimal(-1.2), 0.2);

console.log(getDecimal(4.5), 0.5);
