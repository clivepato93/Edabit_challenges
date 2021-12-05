// https://edabit.com/challenge/27Toh4rACcmRvRLrb

function sumArray(arr) {
	return arr.flat(Infinity).reduce((t,c)=> t+c,0)
}


console.log(sumArray([1, 2, 3]), 6)
console.log(sumArray([1, [1, 2], [3, 1]]), 8)
console.log(sumArray([[1, 1], [2, 8], 8]), 20)
console.log(sumArray([1, 2]), 3)
console.log(sumArray([1, [2, [1]], 3]), 7)