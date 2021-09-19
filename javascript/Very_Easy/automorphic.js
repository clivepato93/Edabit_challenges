// https://edabit.com/challenge/nmFGPbuMkmzpYoXum

function automorphic(n) {
    const arr = (n**2).toString()
	// return +arr.slice(arr.length-1)==(n).toString()
    return arr.endsWith(n)
}

console.log(automorphic(1), true)
console.log(automorphic(3), false)
console.log(automorphic(6), true)
console.log(automorphic(9), false)
console.log(automorphic(10), false)
console.log(automorphic(25), true)