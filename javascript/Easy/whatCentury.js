// https://www.codewars.com/kata/52fb87703c1351ebd200081f/train/javascript

function whatCentury(year)
{
  // code must go here
  const obj = {'1':'st', '2':'nd', '3':'rd'}
  const century =`${Math.ceil(+year/100)}`
  return century.slice(-2,-1)=='1'? century+'th':obj[century.slice(-1)]?century+obj[century.slice(-1)]:century+'th'
}

console.log(whatCentury("1999"), "20th", "With input '1999' solution produced wrong output");
console.log(whatCentury("2011"), "21st", "With input '2011' solution produced wrong output");
console.log(whatCentury("2154"), "22nd", "With input '2154' solution produced wrong output");
console.log(whatCentury("2259"), "23rd", "With input '2259' solution produced wrong output");
console.log(whatCentury("1234"), "13th", "With input '1234' solution produced wrong output");
console.log(whatCentury("1023"), "11th", "With input '1023' solution produced wrong output");
console.log(whatCentury("2000"), "20th", "With input '2000' solution produced wrong output");