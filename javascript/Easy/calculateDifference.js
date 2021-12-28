

// https://edabit.com/challenge/8s2jy9hR2TAeQinKD

function calculateDifference(obj, limit) {
	return Object.values(obj).reduce((t,c)=> t+c,0)-limit
}