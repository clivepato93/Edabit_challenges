// https://edabit.com/challenge/rqu2efZF7N2MEYDWk

function birthdayCakeCandles(candles) {
	return candles.filter(v=>Math.max(...candles)===v).length
}   

console.log(birthdayCakeCandles([4,4,1,3]), 2)
console.log(birthdayCakeCandles([3,2,1,3]), 2)