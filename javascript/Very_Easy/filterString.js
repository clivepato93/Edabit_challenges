// https://edabit.com/challenge/KWkWjHNzgCqM6yPBa


function filterString(txt) {
	return [txt.match(/[A-Z]/g).length,txt.match(/[a-z]/g).length,txt.match(/[0-9]/g).length,txt.match(/[^a-z0-9A-Z]/g).length]
}



console.log(filterString("*$(#Mu12bas43hiR%@*!"), [2,6,4,8])
