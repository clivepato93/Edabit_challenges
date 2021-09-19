// https://edabit.com/challenge/Tnjbf6pdFsCjmaF8p
function squareDigits(n) {
	return +[...''+n].map(value=> eval(value **2)).join('')
}

console.log(squareDigits(9119), 811181)