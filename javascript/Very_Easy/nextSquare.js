// https://edabit.com/challenge/gcsHhjRNWjiZwiFFj


function nextSquare(n) {
	return Number.isInteger(Math.sqrt(n,2))?(Math.sqrt(n,2)+1)**2:null;
}

console.log(nextSquare(121), 144, "Wrong output for 121")
console.log(nextSquare(625), 676, "Wrong output for 625")