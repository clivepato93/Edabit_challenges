
// https://edabit.com/challenge/3kgpXM2wcSvDR6z4K

function countClaps(str) {
	return str.match(/C/g).length;
}

console.log(countClaps("ClaClaClaClap!"), 4)
