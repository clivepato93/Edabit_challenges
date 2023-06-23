// https://www.codewars.com/kata/5b3f8ac282417eb3180000e6/train/javascript
// Date getUTCDay
function isJubilee(year) {
  //   console.log(new Date(year, 6, 25).toDateString());
  const date = new Date(year, 6, 25);
  return date.getDay() === 0; // Hey, this works for 86% of the cases ;-)
}
