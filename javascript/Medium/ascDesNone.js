// https://edabit.com/challenge/vsoQiYJXRANcYrX3Z

function ascDesNone(arr, str) {
	return str=="Des"?arr.sort((a,b)=>b-a):str=="Asc"?arr.sort((a,b)=>a-b):arr
}