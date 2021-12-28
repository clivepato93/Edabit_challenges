// https://edabit.com/challenge/AYpxyzbnbS7BGSgvds


function charIndex(word, char) {
	const [f,l] = [word.indexOf(char),word.lastIndexOf(char)]
	return f>-1?[f,l]:undefined
}