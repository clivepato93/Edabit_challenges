// https://edabit.com/challenge/m7uCrGQ6KW3pzJsy2

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString

/* toString can a  parameter as follows 
    Some common radix are

    2 for binary numbers,
    8 for octal numbers,
    10 for decimal numbers,
    16 for hexadecimal numbers.

*/

function addBinary(a, b) {
	return (a+b).toString(2)
}

console.log(addBinary(1,1), '10')
console.log(addBinary(1,2), '11')
console.log(addBinary(4,5),'1001')