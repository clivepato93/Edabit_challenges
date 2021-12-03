// https://edabit.com/challenge/cqTmqdMQW83PkZH97

function asterisk(string) {
	return (/a\w*c/).test(string)
}


console.log(asterisk("abccount"), true)
console.log(asterisk("abbbcount"), true)
console.log(asterisk("account"), true)
console.log(asterisk("bbbccount"), false)
console.log(asterisk("ccount"), false)
console.log(asterisk("abbount"), false)

let array = ['today', 'was', 'not', 'so', 'great'];

console.log(  array.splice(2, 2));