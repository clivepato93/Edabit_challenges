// https://www.codewars.com/kata/58ba6fece3614ba7c200017f/train/javascript

function palindrome(num) { 
    //Code goes here
    if(typeof num != 'number' || num<0) return 'Not valid'
    const stringNum = +[...`${num}`].reverse().join('')
   return stringNum==num
  } 

console.log(palindrome(1221),true);
console.log(palindrome(123322),false);
console.log(palindrome("ACCDDCCA"),"Not valid");
console.log(palindrome("1221"),"Not valid");
console.log(palindrome(-450),"Not valid");