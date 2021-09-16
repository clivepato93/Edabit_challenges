// https://edabit.com/challenge/5cGbZP8N9mQXzDwML 



function moveZeros(arr) {
	const notZeros=arr.filter(x => x!==0)
    const zeros=arr.filter(x => x===0)
    return notZeros.concat(zeros)
}

console.log((moveZeros([1,2,0,1,0,1,0,3,0,1]), [1,2,1,1,3,1,0,0,0,0]))