// https://edabit.com/challenge/Mc6Xi4PRw7fDzeMDB

function doubleChar(str) {
	return Array.from({length:str.length},(_,i)=> str[i]+str[i]).join('')
}


console.log(doubleChar("String"), "SSttrriinngg")
