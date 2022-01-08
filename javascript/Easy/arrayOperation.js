// https://edabit.com/challenge/NFfYCBEQepsD5mfEk

function arrayOperation(x, y, n) {
	return Array.from({length:y-x+1},(_,i)=> x+i).filter((v)=> v%n==0)
    // 
}

console.log(arrayOperation(1, 10, 3), [3, 6, 9])
console.log(arrayOperation(7, 9, 2), [8])
console.log(arrayOperation(15, 20, 7), [])
console.log(arrayOperation(10, 50, 10), [10, 20, 30, 40, 50])
console.log(arrayOperation(1, 10, 2), [2, 4, 6, 8, 10])
console.log(arrayOperation(1, 100, 17), [17, 34, 51, 68, 85])
console.log(arrayOperation(15, 20, 5), [15, 20])