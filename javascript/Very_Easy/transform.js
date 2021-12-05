// https://edabit.com/challenge/dWNPtNeQgyn6mS8FA


function transform(arr) {
	return arr.map(item=> item%2==0? item-1:item+1)
}
