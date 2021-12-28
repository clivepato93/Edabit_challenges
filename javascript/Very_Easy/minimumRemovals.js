// https://edabit.com/challenge/exMRkWdmmc6hccYiS

function minimumRemovals(arr) {
	const x = arr.reduce((total,curr)=> total+curr)
	return x%2==0?0:1
}

console.log(minimumRemovals([1, 2, 3, 4, 5]), 1)
console.log(minimumRemovals([5, 7, 9, 11]), 0)
console.log(minimumRemovals([5, 7, 9, 12]), 1)
console.log(minimumRemovals([5, 8, 8, 8]), 1)
console.log(minimumRemovals([5, 8, 8, 8, 9, 9]), 1)
console.log(minimumRemovals([9, 8, 8, 8, 9, 9]), 1)
console.log(minimumRemovals([5, 5, 4, 4, 3, 3]), 0)
console.log(minimumRemovals([5, 3, 4, 4, 3]), 1)
console.log(minimumRemovals([5, 3, 4, 4, 0]), 0)