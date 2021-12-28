// https://edabit.com/challenge/arKLRM8qGzKZbCxCk

function getDecimalPlaces(num) {
	const lengthofNum = num.match(/\.\d+/)
	return lengthofNum==null ? 0 : lengthofNum[0].length-1
}