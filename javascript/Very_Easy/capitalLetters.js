// https://edabit.com/challenge/tkFfKQJzcuaDysDyY

function capitalLetters(str) {
	let final = str.match(/[A-Z]/g);
	return final==null?0:final.length;

}

let testString = "test test test";
let reRegex = /(test)(\s)\1\2\1/;
let result = reRegex.test(testString);
let result2 = testString.match(reRegex);
console.log(result2)

let repeatNum = "42 42 42";
let reRegex2 = /(\d+) \3\2/; // Change this line
let result4 = reRegex2.test(repeatNum);
console.log(result4)