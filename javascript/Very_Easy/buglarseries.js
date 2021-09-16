// https://edabit.com/challenge/cEbhy9eWeNudEuxut

function makeCopy(obj) {
	let objCopy = Object.assign({},obj)
	return objCopy
}

const makeCopy= obj => ({...obj})