// https://www.codewars.com/kata/557b5e0bddf29d861400005d/train/javascript
function converter(mpg) {
  //code to convert miles per imperial gallon to kilometers per liter
  /* formula convert number of miles to KM using conversion 1 mile =  1.609344 KM
     then divide this value over the number of litres that are in a gallon 4.54609188s  
  */
  return ((mpg * 1.609344) / 4.54609188).toFixed(2);
}

console.log(converter(10), 3.54);
console.log(converter(20), 7.08);
console.log(converter(30), 10.62);
