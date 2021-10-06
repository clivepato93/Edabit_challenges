// https://edabit.com/challenge/eRuGNqijDdFpLsW5K

function toScottishScreaming(str) {
    const vowels = {'a':'e','i':'e','o':'e','u':'e'};
	const nextString= str.toLowerCase().replace(/[aiou]/g,l=>vowels[l]).toUpperCase()
    return nextString
}



console.log(toScottishScreaming("lorem ipsum"),"LEREM EPSEM")
console.log(toScottishScreaming("Leeroy jenkins!"),"LEEREY JENKENS!")
console.log(toScottishScreaming("A, wonderful, day, don't, you, think?"),"E, WENDERFEL, DEY, DEN'T, YEE, THENK?")
console.log(toScottishScreaming("Hello world"),"HELLE WERLD")
console.log(toScottishScreaming("start queueing you oafs"),"STERT QEEEEENG YEE EEFS")