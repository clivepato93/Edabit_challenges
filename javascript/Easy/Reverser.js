// https://www.codewars.com/kata/58069e4cf3c13ef3a6000168/train/javascript

/*
Impliment the reverse function, which takes in input n and reverses it.
For instance, reverse(123) should return 321. You should do this without 
converting the inputted number into a string.
*/

function reverse(n) {
  // your code here
  const arr = [];
  let i = 0;
  let total = 0;
  while (n >= 1) {
    // console.log(n);
    arr.push(n % 10);
    n = Math.floor(n / 10);
    i++;
  }
  for (let j = 0; j < arr.length; j++) {
    const element = arr[j];
    i--;
    console.log(10 ** i);
    total += element * 10 ** i;
  }
  return total;
}

function reverse(n) {
  let rev = 0;
  while (n) {
    rev = rev * 10 + (n % 10);
    console.log(rev);
    n = Math.floor(n / 10);
    console.log(n);
  }
  return rev;
}

console.log(reverse(1234), 4321);
console.log(reverse(10987), 78901);
console.log(reverse(1020), 201);
