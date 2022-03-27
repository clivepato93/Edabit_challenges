


function sumDigits(number) {
    return [...(''+number).replace(/\-/g,'')].reduce((t,c)=> t+ +c,0)
  }
  

console.log(sumDigits(10), 1);
console.log(sumDigits(99), 18);
console.log(sumDigits(-32), 5);

console.log(undefined==false)