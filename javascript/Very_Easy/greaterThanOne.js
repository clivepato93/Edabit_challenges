// https://edabit.com/challenge/L65zKSJKaDAj6JGyt
function greaterThanOne(frac) {
	return eval(frac) >1
}


console.log(greaterThanOne("1/2"), false)
console.log(greaterThanOne("7/4"), true)
console.log(greaterThanOne("10/10"), false)
console.log(greaterThanOne("12/30"), false)
console.log(greaterThanOne("28/3"), true)
console.log(greaterThanOne("35/31"), true)
console.log(greaterThanOne("11/27"), false)