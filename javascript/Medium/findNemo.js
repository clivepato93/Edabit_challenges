// https://edabit.com/challenge/c23dFfNiKbnguSQtq


function findNemo(sentence) {
	const findNemo = sentence.split(' ')
    if (findNemo.indexOf('Nemo')>-1){
        return `I found Nemo at ${findNemo.indexOf('Nemo')+1}!`
    } return "I can't find Nemo :("
   
}


console.log((findNemo("I am Ne mo Nemo !"), "I found Nemo at 5!"))