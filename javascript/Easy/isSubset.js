// https://edabit.com/challenge/3ymGugubc4gTfcqcR

function isSubset(arr1, arr2) {
   return arr1.every(el=> arr2.includes(el)) 	
}


console.log(isSubset([3, 2, 5], [5, 3, 7, 9, 2]), true)
console.log(isSubset([8, 9], [7, 1, 9, 8, 4, 5, 6]), true)
console.log(isSubset([1, 2], [1, 2, 3]), true)
console.log(isSubset([1, 2], [3, 5, 9, 1]), false)
console.log(isSubset([1, 2, 3, 4], [4, 3, 2, 1]), true)
console.log(isSubset([7, 9, 8, 4, 2], [7, 9, 5, 8, 4]), false)