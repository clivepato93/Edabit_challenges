// https://www.codewars.com/kata/56b0ff16d4aa33e5bb00008e/train/javascript
function shortenToDate(longDate) {
  // your code here
  return longDate.slice(0, longDate.indexOf(","));
}

console.log(shortenToDate("Friday May 2, 9am"), "Friday May 2");
