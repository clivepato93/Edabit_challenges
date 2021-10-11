// https://edabit.com/challenge/M5RTAawPtRSByE3HT

function twoDigitSum(n) {
	return n%10+Math.floor(n/10)
}


console.log(twoDigitSum(45), 9)
console.log(twoDigitSum(65), 11)