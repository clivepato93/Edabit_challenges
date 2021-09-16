// https://edabit.com/challenge/FBedBBPjcgGDBm5yr


function getCase(str) {
	if(str===str.toLowerCase()){
        return 'lower'
    }if(str===str.toUpperCase()){
        return 'upper'
    } return 'mixed'
}

console.log(getCase("whisper..."), "lower")