// https://edabit.com/challenge/B3FR3P7g8NyTg7t8b

function sliceSum(arr, n) {
	return arr.slice(0,n).reduce((t,c)=> t+c,0)
}