// https://edabit.com/challenge/H3fKTSK4dgwXRbfTP

function centuryFromYear(year) {
	return Math.ceil(year/100)
}

console.log(centuryFromYear(2020), 21)
console.log(centuryFromYear(200), 2)
console.log(centuryFromYear(2005), 21)
console.log(centuryFromYear(1700), 17)
console.log(centuryFromYear(1705), 18)