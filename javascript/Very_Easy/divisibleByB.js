// https://edabit.com/challenge/DiBDhWkLieXjsneMM

function divisibleByB(a, b) {
	return Math.ceil(a/b)*b
}


console.log(divisibleByB(17, 8), 24)
console.log(divisibleByB(98, 3), 99)
console.log(divisibleByB(14, 11), 22)
console.log(divisibleByB(11, 8), 16)
console.log(divisibleByB(450, 36), 468)
console.log(divisibleByB(1019, 13), 1027)