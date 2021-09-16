
function checkSquareAndCube(arr) {
	const [a,b]=arr
    return Math.sqrt(a)===Math.cbrt(b)
}

console.log(checkSquareAndCube([4, 8]), true)