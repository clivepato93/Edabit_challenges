// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-recursion-to-create-a-range-of-numbers

// function rangeOfNumbers(startNum, endNum) {
//     if(startNum==endNum){
//         return [endNum]
//     } else {
//         const arr = rangeOfNumbers(startNum+1,endNum)
//         arr.splice(0,0,startNum)
//         return arr
//     }
    
//   };


function rangeOfNumbers(startNum, endNum) {
    return startNum==endNum? [endNum]: [].concat(...rangeOfNumbers(startNum+1))
}

  console.log(rangeOfNumbers(1, 5));