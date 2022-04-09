// https://www.codewars.com/kata/55c5b03f8c28da9a51000045/train/javascript

function findSum(...arg){
    //code here
    if(arg.some((el)=> el<0)) return -1
    return arg.reduce((t,c)=> t+c,0)
  }

console.log(findSum(1,3,5), 9, "1 + 3 + 5 = 9")
console.log(findSum(0,3,9,2), 14, "0+3+9+2 = 14")
console.log(findSum(), 0, "If no arguments, function should return 0")
console.log(findSum(1,-2,4) , -1, "If negative arguments are passed, function should return -1")
console.log(findSum(0), 0, "The sum of 0 is 0")