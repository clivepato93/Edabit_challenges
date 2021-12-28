// https://edabit.com/challenge/Akgh37c6dccEsNBt6

function spelling(str) {
	const list = []
	let mod = 1;
	while(list.length!=str.length){
		list.push(str.substring(0,mod))
		mod++;
	}
	return list
}