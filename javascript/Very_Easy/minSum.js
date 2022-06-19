// https://www.codewars.com/kata/5a523566b3bfa84c2e00010b/train/javascript

function minSum(arr) {
    // your code here
    arr = arr.sort((a,b)=> b-a)
    // console.log(arr)
    let final = 0
    while(arr.length){
        final+= arr[0]!=0 && arr[-1]!=0?arr.shift()*arr.pop():0
        // console.log(final,arr)

    }

    return final
  }

console.log(minSum([5,4,2,3]), 22);
console.log(minSum([12,6,10,26,3,24]), 342);
console.log(minSum([9,2,8,7,5,4,0,6]), 74);