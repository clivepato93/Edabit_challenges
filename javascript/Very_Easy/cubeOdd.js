// https://www.codewars.com/kata/580dda86c40fa6c45f00028a/train/javascript

function cubeOdd(arr) {

    // insert code here >.<
    if(arr.some(el => typeof el !='number')) return undefined
    
    return arr.reduce((t,c)=> Math.abs(c)%2==1?t+=c**3:t=t,0)
    }

console.log(cubeOdd([1, 2, 3, 4]), 28);
console.log(cubeOdd([-3,-2,2,3]), 0);
console.log(cubeOdd(["a",12,9,"z",42]), undefined);