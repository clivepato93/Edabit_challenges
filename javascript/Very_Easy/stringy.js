// https://www.codewars.com/kata/563b74ddd19a3ad462000054/train/javascript

function stringy(size) {
    // your code here  
    return Array.from({length:size},(_,i)=> i%2==0?'1':'0').join('')
  }