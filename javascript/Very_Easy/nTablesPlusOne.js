// https://edabit.com/challenge/F3Jdoa5YBSboP4ucb

function nTablesPlusOne(n) {
	return Array.from({length:10},(_,i)=> n*(i+1)+1).join(',')
}

console.log((nTablesPlusOne(1), "2,3,4,5,6,7,8,9,10,11"))
console.log((nTablesPlusOne(7), "8,15,22,29,36,43,50,57,64,71"))