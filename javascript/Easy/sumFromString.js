// https://www.codewars.com/kata/55da6c52a94744b379000036/train/javascript

function sumFromString(str){
    // ...
    const n = str.match(/\d{1,}/g)
    return n? str.match(/\d{1,}/g).reduce((t,c)=> t+ +c,0):0
  }

console.log(sumFromString("In 2015, I want to know how much does iPhone 6+ cost?"))// == 2021)
console.log(sumFromString("1+1=2"))// == 4)
console.log(sumFromString("e=mc^2"))// == 2)