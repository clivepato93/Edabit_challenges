// https://edabit.com/challenge/vCtepsfrE7Nts2a9j

function hammingDistance(str1, str2) {
	return [...str1].reduce((total,letter,i)=> str1[i]!==str2[i]?total+=1:total=total,0)
}