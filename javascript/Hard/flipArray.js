// https://edabit.com/challenge/wytnq5RFKdMaD9GGM


function flipArray(arr) {
	if(Array.isArray(arr[0])){
    return arr.flat()
    }
return []==arr?arr:arr.map(el=> [el])
} 

console.log(flipArray([1, 2, 3, 4]), [[1], [2], [3], [4]])
console.log(flipArray([[5], [6], [9]]), [5, 6, 9])
console.log(flipArray([[7], [8], [9], [55]]), [7, 8, 9, 55])
console.log(flipArray([7, 8, 9, 55]),[[7], [8], [9], [55]])
console.log(flipArray([[1], [2]]), [1, 2])
console.log(flipArray([5, 8]), [[5], [8]])
console.log(flipArray([2]), [[2]])
console.log(flipArray([]), [])



