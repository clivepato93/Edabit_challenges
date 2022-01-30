// https://edabit.com/challenge/moK78CirzYbqk6g3z


function reverseAndNot(i) {
	return +([...''+i].reverse().join('')+i)
}