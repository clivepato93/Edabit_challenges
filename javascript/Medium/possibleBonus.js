// https://edabit.com/challenge/NHfYRHg2tDtcZyykB

function possibleBonus(a, b) {
	const c = b-a
	return c>0 && c<7
}

console.log(possibleBonus(3, 7), true)
console.log(possibleBonus(0, 6), true)
console.log(possibleBonus(1, 6), true)
console.log(possibleBonus(2, 6), true)
console.log(possibleBonus(3, 6), true)
console.log(possibleBonus(4, 6), true)
console.log(possibleBonus(5, 6), true)
console.log(possibleBonus(6, 6), false)
console.log(possibleBonus(7, 6), false)
console.log(possibleBonus(23, 27), true)
console.log(possibleBonus(1, 9), false)
console.log(possibleBonus(5, 3), false)