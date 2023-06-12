// https://www.codewars.com/kata/525c1a07bb6dda6944000031/train/javascript
// Array constructor length property then iterating based on the length property then adding codewars to the array
var websites = Array.from({ length: 1000 }, (_, i) => "codewars");

console.log(websites.length > 0, "The array is still empty");
console.log(websites.length == 1000, "The array does not equal 1,000");
console.log(
  websites.every(function (e) {
    return e == "codewars";
  }),
  'Every element in the array must contain the value "codewars"'
);
