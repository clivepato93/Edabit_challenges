// https://www.codewars.com/kata/5552101f47fc5178b1000050/train/javascript

function digPow(n, p){
    // ...
    const total  = [...`${n}`].map((el,i)=> el**(p+i)).reduce((t,c)=> t+c,0);
    if(total<n) return -1;
    if(n==total) return p;
    const result  = total/n ;
    return result%1==0?result:-1;

  }

console.log(digPow(695, 2),2)
console.log(digPow(89, 1), 1)
console.log(digPow(92, 1), -1)
console.log(digPow(46288, 3), 51)
console.log(digPow(89, 1), 1)
