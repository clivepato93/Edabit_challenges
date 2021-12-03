// https://edabit.com/challenge/arzsQcGsstJxHAnGi

function isAvgWhole(arr) {
	const t = arr.reduce((total,curr) => total+curr,0)
	return Number.isInteger(t/(arr.length))
}