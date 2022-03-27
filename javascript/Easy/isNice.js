// https://www.codewars.com/kata/59b844528bcb7735560000a0/train/javascript

function isNice(arr){
    if(!arr|| !arr.length) return false
    for (let i = 0; i < arr.length; i++) {
        if(arr.indexOf(arr[i]+1) == -1 && arr.indexOf(arr[i]-1) == -1) {
        return false    
        }
    }
    return true
  }

console.log(isNice([ 1, 1, 8, 3, 1, 1 ]),false);
// console.log(isNice([2,10,9,3]),true);
// console.log(isNice([3,4,5,7]),false);