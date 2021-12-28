// https://edabit.com/challenge/rufYqKzTLvDefFmKa

function toArray(num) {
	return [...(''+num)].map(i=> +i)
}

function toNumber(arr) {
	return +arr.join('')
}