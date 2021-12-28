
// https://edabit.com/challenge/WBdjg7zgiqi6L5zsL

function isStrangePair(str1, str2) {
	if (str1==str2){
		return true
	}
	return str2.endsWith(str1[0]) && str1.endsWith(str2[0])
}