// https://edabit.com/challenge/eCPim4XcssdZdvs32

function numInStr(arr) {
    const reg = /[0-9]/;
	return arr.map(item=> reg.test(item)==true?item:'').filter(item=> item);
    //
}


console.log(numInStr(['abc', 'abc10']), ['abc10'])
console.log(numInStr(['abc', 'ab10c',  'a10bc', 'bcd']),['ab10c', 'a10bc'])
console.log(numInStr(['1', 'a' , ' ' ,'b']), ['1'])
console.log(numInStr(['rct', 'ABC', 'Test', 'xYz']), [])
console.log(numInStr(['this IS','10xYZ', 'xy2K77', 'Z1K2W0', 'xYz']), ['10xYZ', 'xy2K77', 'Z1K2W0'])
console.log(numInStr(['-/>', '10bc', 'abc ']), ['10bc'])