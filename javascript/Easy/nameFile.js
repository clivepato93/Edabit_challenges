// https://www.codewars.com/kata/5829994cd04efd4373000468/train/javascript
function nameFile(fmt, nbr, start) {
  // your code here
  const arr = [];
  if (nbr < 1 || nbr % 1 || start % 1) {
    return arr;
  }
  for (let i = 0; i < nbr; i++) {
    let str = fmt;
    str = str.replace(/<index_no>/g, i + start);
    arr.push(str);
  }
  return arr;
}
