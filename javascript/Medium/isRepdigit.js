// https://edabit.com/challenge/8vSpPNjNx6JBcvxdcs


function isRepdigit(num) {
	return new Set(''+num).size==1
}