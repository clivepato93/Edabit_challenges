//  https://www.codewars.com/kata/525f039017c7cd0e1a000a26/train/javascript

const numberRev = n => +[...`${n}`].reverse().join('')

const palindromeChainLength = function(n,x=0) {
    if(numberRev(n)==n) return x
    return palindromeChainLength(n+=numberRev(n),x+=1)
  };

console.log(palindromeChainLength(1),  0);
console.log(palindromeChainLength(88), 0);    
console.log(palindromeChainLength(87), 4);
console.log(palindromeChainLength(89), 24);
console.log(palindromeChainLength(10), 1);