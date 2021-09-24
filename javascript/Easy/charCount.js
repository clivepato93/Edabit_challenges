// https://edabit.com/challenge/kbFhwaDyrd79JrgeB


function charCount(myChar, str) {
	return [...str].filter(letter => letter===myChar).length
}


console.log(charCount('a', 'edabit'), 1)
console.log(charCount('b', 'big fat bubble'), 4)
console.log(charCount('c', 'Chamber of secrets'), 1)
console.log(charCount('f', 'frank and his friends have offered five foxes for sale'), 7)
console.log(charCount('x', 'edabit'), 0)
console.log(charCount('a', 'Adam and Eve bit the apple and found a snake'), 6)
console.log(charCount('s', 'sssssssssssssssssssssssss'), 25)
console.log(charCount('7', '10795426697'), 2)