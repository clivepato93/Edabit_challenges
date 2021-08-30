// https://edabit.com/challenge/rTDLyF5itdoubs9ka


function toNumberArray(arr) {
    arr1=arr.map(x => +x)
	return arr1
}


console.log(toNumberArray(["1", "2"]), [1, 2])
console.log(toNumberArray(["3", "4"]), [3, 4])