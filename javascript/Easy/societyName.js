// https://edabit.com/challenge/zQm9YZTTFPhNtYjDr


function societyName(friends) {
    friends.sort()
	console.log(friends.reduce((abb,word)=> abb+word[0],''))
}


console.log(societyName(['Phoebe', 'Chandler', 'Rachel', 'Ross', 'Monica', 'Joey']), 'CJMPRR')
