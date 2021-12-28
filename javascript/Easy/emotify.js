// https://edabit.com/challenge/Szh3ib2bpJCYXKrKa


function emotify(str) {
	const emoji = {
		'smile':':D',
		'grin':':)',
		'sad':':(',
		'mad':':P'
	}
	const lastWord = str.split(' ')[2];
	return str.replace(lastWord,emoji[lastWord])
}