// https://edabit.com/challenge/hztqDz4mjCPpLMMF4

function numberArgs(...n) {
	return n.length
}

console.log(numberArgs('a', 'b', 'c'), 3)
console.log(numberArgs(10, 20, 30, 40, 50), 5)
console.log(numberArgs('x', 'y'), 2)
console.log(numberArgs(), 0)