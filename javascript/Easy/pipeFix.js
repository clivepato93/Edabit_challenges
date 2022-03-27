// https://www.codewars.com/kata/56b29582461215098d00000f/train/javascript


function pipeFix(n){
    return [...Array.from({length:Math.max(...n)-Math.min(...n)+1},(_,i)=> i+Math.min(...n))]
  }
//   ,(_,i)=> i=Math.min(...n)
console.log(pipeFix([1,2,3,5,6,8,9]),[1,2,3,4,5,6,7,8,9]);
console.log(pipeFix([1,2,3,12]),[1,2,3,4,5,6,7,8,9,10,11,12]);
console.log(pipeFix([6,9]),[6,7,8,9]);
console.log(pipeFix([-1,4]),[-1,0,1,2,3,4]);
console.log(pipeFix([1,2,3]),[1,2,3]);