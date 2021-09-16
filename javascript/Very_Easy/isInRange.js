// https://edabit.com/challenge/Wp8uSyh2tfpdzR4CP

function isInRange(num, range) {
	return num>=range.min && num<=range.max? true:false
}


console.log( (isInRange(4, { min: 0, max: 5 }), true))
console.log( (isInRange(4, { min: 4, max: 5 }), true))