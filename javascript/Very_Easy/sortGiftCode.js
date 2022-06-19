// https://www.codewars.com/kata/52aeb2f3ad0e952f560005d3/train/javascript

// function sortGiftCode(code){
//     //TODO 
//     return [...code].sort().join('')
//   }

function sortGiftCode(code){

    // Extra and not needed :D
    return [...code].sort((a,b)=>a.charCodeAt(0)-b.charCodeAt(0)).join('')
  }

console.log(sortGiftCode('abcdef'), 'abcdef');
console.log(sortGiftCode('pqksuvy'), 'kpqsuvy');
console.log(sortGiftCode('zyxwvutsrqponmlkjihgfedcba'), 'abcdefghijklmnopqrstuvwxyz');