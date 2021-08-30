https://edabit.com/challenge/MjqneMZ7aZa8AxXZG
function repetition(txt, n) {
	if (n===1){
        return txt
    } return txt+repetition(txt,n-1)
}

console.log(repetition("soccer", 2), "soccersoccer")
