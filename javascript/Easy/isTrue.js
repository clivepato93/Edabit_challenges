// https://edabit.com/challenge/b8XYLrNhqryNjkDPd


function isTrue(relation) {
	relation = relation.replace('=','===')
	return eval(relation)
}