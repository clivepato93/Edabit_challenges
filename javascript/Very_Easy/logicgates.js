// https://edabit.com/challenge/yuCSeYGAngyT77gsm

function NOT(n) {
	return n==1?0:1
}

function AND(a, b) {
	return a&&b
}

function OR(a, b) {
	return a||b
}

// Better solution for the first one 

const NOT = x => +!x


console.log(AND(1, 1), 1)
console.log(OR(1, 1), 1)
console.log(AND(0, 1), 0)
console.log(AND(0, 0), 0)
console.log(OR(0, 1), 1)
console.log(OR(1, 0), 1)
console.log(OR(0, 0), 0)
console.log(NOT(0), 1)
console.log(AND(1, 0), 0)
console.log(NOT(1), 0)