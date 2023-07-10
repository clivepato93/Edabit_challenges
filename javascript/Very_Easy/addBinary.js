// https://edabit.com/challenge/m7uCrGQ6KW3pzJsy2

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString

/* toString can a  parameter as follows 
    Some common radix are

    2 for binary numbers,
    8 for octal numbers,
    10 for decimal numbers,
    16 for hexadecimal numbers.

*/

function addBinary(a, b) {
  return (a + b).toString(2);
}

console.log(addBinary(1, 1), "10");
console.log(addBinary(1, 2), "11");
console.log(addBinary(4, 5), "1001");

//https://www.codewars.com/kata/57f6ecdfcca6e045d2001207/train/javascript
function add(a, b) {
  // code here
  return "" + a == b;
}

console.log(add("1", 1), true);
console.log(add(1, "1"), true);
console.log(add(1, "0"), false);
console.log(add("11", 11), true);
console.log(add(12, 12), true);
console.log(add(120, "021"), false);
