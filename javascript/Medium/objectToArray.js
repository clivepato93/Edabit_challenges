// https://edabit.com/challenge/4aaBNPnFMc3bzR7JR

function objectToArray(obj) {
	return Object.entries(obj)
}

console.log(objectToArray({
	D: 1, 
  B: 2, 
  C: 3
}), [["D", 1], ["B", 2], ["C", 3]])

console.logobjectToArray({
	likes: 2, 
  dislikes: 3, 
  followers: 10
}), [["likes", 2], ["dislikes", 3], ["followers", 10]]