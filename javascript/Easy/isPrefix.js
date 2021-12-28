
// https://edabit.com/challenge/pBp7v6zkQvNa9jByh

function isPrefix(word, prefix) {
	return word.startsWith(prefix.slice(0,-1))
}

function isSuffix(word, suffix) {
	return word.endsWith(suffix.slice(1,))
}