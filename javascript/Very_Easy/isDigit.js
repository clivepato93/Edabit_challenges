//www.codewars.com/kata/57126304cdbf63c6770012bd/train/javascript

function isDigit(s) {
  //your code
  return s == parseFloat(s);
}

var input = "s2324";
console.log(isDigit(input), false);

input = "-234.4";
console.log(isDigit(input), true);
