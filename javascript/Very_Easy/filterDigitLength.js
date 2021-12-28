// https://edabit.com/challenge/RXNybvGHLuvFiWKvq

function filterDigitLength(arr, num) {
	//return arr.filter(num => (num.toString().length)==num)
	const final = [];
	for(let i=0;i<arr.length;i++){
		const item = arr[i].toString()
		if (item.length==num){
			final.push(arr[i])
		}
	} return final
}

function filterDigitLength(arr, num) {
	return arr.filter(n => n.toString().length ===num)
}