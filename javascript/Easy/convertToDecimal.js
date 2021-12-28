// https://edabit.com/challenge/4tLabih2cr5Haw7xo

function convertToDecimal(perc) {
	return perc.map(item=> +(item.split('%')[0])/100)
}