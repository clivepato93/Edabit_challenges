// https://edabit.com/challenge/rvsvGvqZ3BzNieKqA

function detectWord(str) {
	let finalWord=''
    for(const letter of str){
        if(letter===letter.toLowerCase()){
            finalWord+=(letter)
        }
    } return finalWord
}

console.log(detectWord("UcUNFYGaFYFYGtNUH"), "cat")
console.log(detectWord("bEEFGBuFBRrHgUHlNFYaYr"), "burglar")
console.log(detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment"), "embezzlement")