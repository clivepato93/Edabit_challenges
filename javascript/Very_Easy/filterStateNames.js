// https://edabit.com/challenge/8fnEAEj5vKNqAXNYA

function filterStateNames(arr, type) {
	if(type == 'abb') return arr.filter(item=> item.length==2)
	return arr.filter(item=> item.length>2)
}