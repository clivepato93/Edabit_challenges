// https://edabit.com/challenge/9mKB2XJJ9gYgjms4Z

function evenOrOdd(arr) {
	let x = 0
	for(let i=0;i<arr.length;i++){
		x+=arr[i]
	} return x%2===0?'even':'odd'
}

console.log(evenOrOdd([0]), 'even')
console.log(evenOrOdd([1]), 'odd')
console.log(evenOrOdd([]), 'even')
console.log(evenOrOdd([0, 1, 5]), 'even')
console.log(evenOrOdd([0, 1, 3]), 'even')
console.log(evenOrOdd([1023, 1, 2]), 'even')
console.log(evenOrOdd([0, -1, -5]), 'even')
console.log(evenOrOdd([0, -1, -3]), 'even')