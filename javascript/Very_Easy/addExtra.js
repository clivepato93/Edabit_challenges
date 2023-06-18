// https://www.codewars.com/kata/566dc05f855b36a031000048/train/javascript
// arrays passing by reference
function addExtra(listOfNumbers) {
  // your code here
  // add an int to listOfNumbers and return it
  const x = [...listOfNumbers, 5];
  return x;
}

console.log(addExtra([1, 2, 3]).length, 4);
console.log(addExtra([1, 2]).length, 3);
console.log(addExtra([]).length, 1);
