// https://edabit.com/challenge/49xuWj6G4yB6MfvWG

function scoreCalculator(easy, med, hard) {
	const [...x]=[easy*5,med*10,hard*20]
	if(x.some(ele=> ele<0)){
		return 'invalid'
	} return x.reduce((total,index)=> total+index,0)
}