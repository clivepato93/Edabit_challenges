// https://edabit.com/challenge/b2NdDSdkjqFnCTfS8

function filterArray(arr) {
	return arr.filter(value => typeof value!=='string')
}

console.log(filterArray([1, 2, "a", "b"]), [1, 2])
console.log(filterArray([1, "a", "b", 0, 15]), [1, 0, 15])