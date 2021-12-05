// https://edabit.com/challenge/qgS7XZjvL8wEChNvq

function getDiscounts(nums, d) {
	const x=  parseFloat(('0.'+d.slice(0,d.length-1)))
	return nums.map(item=> item*x)
}