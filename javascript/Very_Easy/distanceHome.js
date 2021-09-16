// https://edabit.com/challenge/ywBPgGhgeLHibEG7H


function distanceHome(arr) {
	return Math.abs(arr.reduce((total,current)=> total+current))
}


console.log((distanceHome([2, 4, 2, 5]), 13))
console.log((distanceHome([-1, -4, -3, -2]), 10))