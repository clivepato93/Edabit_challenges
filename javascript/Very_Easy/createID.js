// https://edabit.com/challenge/Ht67uJXACq4hWrC2i

function createID(f, l) {
	return f[0].toLowerCase()+l[0].toUpperCase()+l.slice(1,3).toLowerCase()
}


console.log(createID("mary","smith"), "mSmi", "all lower case")
console.log(createID("S","WORKING"), "sWor", "all upper case")
console.log(createID("joHN","wAShington"), "jWas", "mixed case")