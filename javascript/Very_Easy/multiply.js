//www.codewars.com/kata/5708f682c69b48047b000e07/train/javascript

function multiply(number) {
  //your code here

  return number * Math.pow(5, `${Math.abs(number)}`.length);
}

console.log(multiply(10), 250);
console.log(multiply(5), 25);
console.log(multiply(200), 25000);
console.log(multiply(0), 0);
console.log(multiply(-2), -10);
