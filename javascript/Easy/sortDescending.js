// https://edabit.com/challenge/yaXQvCzAXJLe37Qie

function sortDescending(num) {
	return +[...`${num}`].sort((a,b)=> b-a).join('')
}