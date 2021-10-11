// https://edabit.com/challenge/XdAR3KohR5w7rjrFg

function sumOfCubes(nums) {
	return nums.reduce((total,curr)=>total+curr**3,0)
}