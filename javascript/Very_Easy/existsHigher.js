// https://edabit.com/challenge/77zq4RhMgWup22H6d

function existsHigher(arr, n) {
	const x =arr.filter(item => item>=n)
	return x.length>=1
}