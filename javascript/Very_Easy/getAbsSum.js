// https://edabit.com/challenge/rCmEy2AQYLbRGgKyL

function getAbsSum(arr) {
	return arr.reduce((total,curr)=> curr>=0?total+= curr:total+= -curr,0)
}