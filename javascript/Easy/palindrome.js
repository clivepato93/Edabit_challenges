// https://www.codewars.com/kata/58ba6fece3614ba7c200017f/train/javascript

/*
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
*/

// https://www.codewars.com/kata/numerical-palindrome-number-1-dot-5

// function palindrome(num,s,arr=[]) {
//   //Code goes here
//   if(typeof num != 'number'|| typeof s != 'number' || num<0) return 'Not valid'
//   const arr = [];
//   while (arr.length!= s) {

//     const stringNum = ([...`${num}`].reverse().join(''));
//     if(stringNum===`${num}` && stringNum.length>1){
//       arr.push(num)
//     }
//     num++;
//     // console.log(stringNum,arr,num)
//   }

//   return arr
// }

// console.log(palindrome(6,4),[11,22,33,44]);
// console.log(palindrome(75,1),[77]);
// console.log(palindrome(493,0),[]);
// console.log(palindrome(0,3),[11,22,33]);
// console.log(palindrome(1219,3),[1221, 1331, 1441]);
// console.log(palindrome(101,2),[101,111]);
// console.log(palindrome(3872,6),[3883, 3993, 4004, 4114, 4224, 4334]);
// console.log(palindrome("ACCDDCCA",3),"Not valid");
// console.log(palindrome(773,"1551"),"Not valid");
// console.log(palindrome(-4505,15),"Not valid");
