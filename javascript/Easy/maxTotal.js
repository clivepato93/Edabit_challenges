// https://edabit.com/challenge/Wg3pBiH8HQggcfaTg

function maxTotal(nums) {
	const [a,b,c,d,e,...f] = nums.sort((a,b)=> a-b)
	return f.reduce((total,curr)=>total+curr,0)
	//return e
	
}