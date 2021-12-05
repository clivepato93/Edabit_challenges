

function repetition(txt, n) {
	return n==1? txt: txt+repetition(txt,n-1)
}


console.log(repetition("soccer", 2), "soccersoccer")
console.log(repetition("ab", 3), "ababab")
console.log(repetition("bonita", 1), "bonita")
console.log(repetition("ciao", 4), "ciaociaociaociao")
console.log(repetition("amigo", 5), "amigoamigoamigoamigoamigo")
console.log(repetition("torque", 2), "torquetorque")