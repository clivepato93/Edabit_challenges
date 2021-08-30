// https://edabit.com/challenge/Hs4TpDHX57Rqegmgg

function concat(...args) {
	return args.flat()
}

function concat(...args) {
	return [].concat(...args)
}

function concat(...args) {
	let arr1=[...args]
	let arr=[]
	for (let i=0;i<arr1.length;i++){
		arr.push(...arr1[i])
	}
	return  arr
}

console.log(concat([1, 2, 3], [4, 5], [6, 7]), [1, 2, 3, 4, 5, 6, 7])
console.log(concat([1], [2], [3], [4], [5], [6], [7]), [1, 2, 3, 4, 5, 6, 7])
console.log(concat([1, 2], [3, 4]), [1, 2, 3, 4])
console.log(concat([4, 4, 4, 4, 4]), [4, 4, 4, 4, 4])
console.log(concat(['a'], ['b', 'c']), ['a', 'b', 'c'])