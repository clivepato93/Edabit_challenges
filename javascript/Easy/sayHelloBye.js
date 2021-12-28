// https://edabit.com/challenge/kLa2w7m4h849k8rmW

function sayHelloBye(name, num) {
	const say = {
		1:'Hello',
		0:'Bye'
	}
	return say[num]+` ${name.slice(0,1).toUpperCase()+name.slice(1,)}`
}