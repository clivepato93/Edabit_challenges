// https://edabit.com/challenge/PTvYKkvf7oytHmJFm

function reverseCase(str) {
	return [...str].map( letter=> letter===letter.toUpperCase()?letter.toLowerCase():letter.toUpperCase()).join('')
}