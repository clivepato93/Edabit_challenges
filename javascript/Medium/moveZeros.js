// https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript

function moveZeros(arr) {
    const zero = arr.filter(el=> el===0)
    return arr.filter(el=>el!==0).concat(zero)
  }

console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]), [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]);