



// function sortArray(array) {
//     // Return a sorted array.
//     const odds = array.filter((el)=>Math.abs(el)%2==1).sort((a,b)=> a-b)
//     console.log(odds);
//     for (let i = 0; i < array.length; i++) {
//         if(Math.abs(array[i])%2==1){
//             array[i]= odds.shift();
//             // console.log(array)
//         }
//     }
//     return array
//   }

  function sortArray(array) {
    const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
    return array.map((x) => x % 2 ? odd.shift() : x);
  }

console.log(sortArray([11, -15,  36,  15, 49, -27, 21, -41,  37,   0, 23,  36, -6, -34, -10, -19, 10,  30]),[ -41, -27, 36, -19, -15, 11, 15, 21, 23, 0, 37, 36, -6, -34, -10, 49, 10, 30])
// console.log(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4]);
// console.log(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0]);
// console.log(sortArray([]),[]);