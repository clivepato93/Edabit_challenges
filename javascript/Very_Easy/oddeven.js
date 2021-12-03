// https://edabit.com/challenge/PqriC6CkLE5JW57aW

function oddeven(arr) {
	return arr.filter((curr)=> curr%2===0).length < arr.filter((curr)=> curr%2!==0).length
}


console.log(oddeven([1, 2, 3, 4, 5, 6, 7, 8, 9]), true)
console.log(oddeven([1]), true)
console.log(oddeven([1, 2, 3, 4, 5, 6, 7, 9]), true)