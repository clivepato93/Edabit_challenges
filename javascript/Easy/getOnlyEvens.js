
// https://edabit.com/challenge/6MZx5RqKYkFaogeAQ

function getOnlyEvens(nums) {
	return nums.filter((item,index) => item%2==0 && index%2==0)
}