// https://edabit.com/challenge/WacpbmmhwWJ2Wgmy9

function mean(nums) {
	return +(nums.reduce((t,c)=> t+c,0)/nums.length).toFixed(1)
}