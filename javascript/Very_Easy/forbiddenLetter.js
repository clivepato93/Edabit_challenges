// https://edabit.com/challenge/AhFCvDdQeA7TnKSqe


function forbiddenLetter(char, arr) {
    const element = word => word.indexOf(char)>-1
	return arr.some(element)
    
}


(forbiddenLetter('e', ['rinse', 'and', 'repeat']), false)