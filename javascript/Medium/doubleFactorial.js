// https://edabit.com/challenge/ZYE9zs95bJrBWpDxg

function doubleFactorial(num) {
	if (num<=1){
        return 1
    } return num*doubleFactorial(num-2)
}

console.log(doubleFactorial(-1), 1)
console.log(doubleFactorial(0), 1)
console.log(doubleFactorial(1), 1)
console.log(doubleFactorial(2), 2)
console.log(doubleFactorial(7), 105)