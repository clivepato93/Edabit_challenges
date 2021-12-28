// https://edabit.com/challenge/qKQ8Bn6ontrLTTNsr

function addNums(nums) {
	const numbers = nums.split(', ').map(el=> +el)
	return numbers.reduce((t,c)=> t+c,0)
}