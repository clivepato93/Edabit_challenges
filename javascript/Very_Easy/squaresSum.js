// https://edabit.com/challenge/ip7xupP78R5z5mTmT

function squaresSum(n) {
	return Array.from({length:n},(_,i)=>i+1).reduce((total,curr)=> total+(curr**2),0)
}


console.log(squaresSum(1), 1)
console.log(squaresSum(2), 5)