// https://edabit.com/challenge/4gzDuDkompAqujpRi

function addUp(num) {
	return num===1?1:num+addUp(num-1);
}

console.log(addUp(4), 10)