

function isSpecialArray(arr) {
	return arr.every((el,i)=> el%2==i%2)
}