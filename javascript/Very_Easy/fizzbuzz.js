// https://edabit.com/challenge/hoDbsz38GzWwBQ47w

function FizzBuzz(num) {
	return num%5==0 && num%3==0?'FizzBuzz':num%5==0 ? 'Buzz':num%3==0?'Fizz':num.toString()
}