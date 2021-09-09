// https://edabit.com/challenge/JZ7TL5S6Q7CqN6GRS

// first solution

// function countDs(sentence) {
// 	const d = sentence.split('')
//     return d.filter(letter => letter==='D'||letter==='d').length
// }

// second solution with regex

function countDs(sentence) {
	const regex = /[Dd]/g;
    return sentence.match(regex).length
}

console.log((countDs("My friend Dylan got distracted at school"), 4))