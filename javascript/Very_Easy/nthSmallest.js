// https://edabit.com/challenge/T9nCQgLQJ9Pi9a9kH

function nthSmallest(arr, n) {
	const x = arr.sort((a,b)=> a-b)
	return !(n)||n>x.length?null:x[n-1]
}