// https://www.codewars.com/kata/534d0a229345375d520006a0/train/javascript

function isPowerOfTwo(n,x=2){
    //.. should return true or false ..
    if(n==1) return true
    if(x>n||!x) return false
    return x==n?true: isPowerOfTwo(n,x*=2)
  }

console.log(isPowerOfTwo(2), true)
console.log(isPowerOfTwo(4096), true)
console.log(isPowerOfTwo(5), false)