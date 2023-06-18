// https://www.codewars.com/kata/563c13853b07a8f17c000022/train/javascript

function isToday(date) {
  // Date
  /*
  used the toISOString() method as it returns the date in string form
  2023-06-17T14:43:44.032Z
  then used the slice method to extract the date 
  */
  return (
    date.toISOString().slice(0, 10) === new Date().toISOString().slice(0, 10)
  );
}
const today = new Date();

console.log(isToday(today), true);

const tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);

const yesterday = new Date();
yesterday.setDate(today.getDate() - 1);
console.log(isToday(yesterday), false);
