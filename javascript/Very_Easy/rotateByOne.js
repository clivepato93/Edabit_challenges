
// https://edabit.com/challenge/ciuEF8N3NNegxbasd

function rotateByOne(arr) {
    const last =arr.pop()
	return [last,...arr]
}	

console.log(rotateByOne([1, 2, 3, 4, 5]), [5, 1, 2, 3, 4])
