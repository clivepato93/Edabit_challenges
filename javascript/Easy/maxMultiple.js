// https://www.codewars.com/kata/5aba780a6a176b029800041c/train/javascript

function maxMultiple(divisor, bound){
    //your code here
    return Math.floor(bound/divisor)*divisor

  }

  console.log(maxMultiple(2,7),6);
  console.log(maxMultiple(3,10),9);
  console.log(maxMultiple(7,17),14);
  console.log(maxMultiple(10,50),50);
  console.log(maxMultiple(37,200),185);
  console.log(maxMultiple(7,100),98);