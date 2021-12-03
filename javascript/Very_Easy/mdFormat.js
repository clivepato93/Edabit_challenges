// https://edabit.com/challenge/yxqTdf5a2PCbGKo9M

function mdFormat(word, style) {
	if(style=='b'){
		return '**'+word+'**'
	} else if(style=='i'){
		return '_'+word+'_'
	} else if(style=='c'){
		return '`'+word+'`'
	} return '~~'+word+'~~'
}