// https://edabit.com/challenge/at7jF9Y7SmPGyD92u

function isSymmetrical(num) {
	const number = [...`${num}`];
	return number.join('')===number.reverse().join('');
}