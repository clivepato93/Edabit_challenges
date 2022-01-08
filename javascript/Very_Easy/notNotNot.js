
/*
function notNotNot(n, bool) {
	return !!(n%2>>bool)
}
*/

function notNotNot(n, bool) {
	return ((n%2)^1)==bool
}


console.log(notNotNot(1, true), false)
console.log(notNotNot(2, false), false)
console.log(notNotNot(7, true), false)
console.log(notNotNot(7, false), true)
console.log(notNotNot(3, true), false)
console.log(notNotNot(13, true), false)
console.log(notNotNot(24, false), false)
console.log(notNotNot(6, false), false)


// console.log(!!(1%2>>1))
console.log(!!1 === true)