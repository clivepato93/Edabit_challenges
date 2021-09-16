// https://edabit.com/challenge/webH9q8JMHc6SmTpY


function rangeOfNum(start, end) {
	const arr = []
    for (let index = start+1; index < end; index++) {
        arr.push(index)
    }
    return arr
}


console.log(rangeOfNum(2, 4), [3])
console.log(rangeOfNum(5, 9), [6, 7, 8])
console.log(rangeOfNum(2, 11), [3, 4, 5, 6, 7, 8, 9, 10])