// https://edabit.com/challenge/DvwY43tNMdEpW4kKu


function marathonDistance(d) {
	return d.reduce((t,c)=> t+Math.abs(c),0)==25
}


console.log(marathonDistance([1, 2, 3, 4]), false)
console.log(marathonDistance([-6, 15, 4]), true)
console.log(marathonDistance([1, 9, 5, 8, 2]), true)
console.log(marathonDistance([9, 7, 6, 5]), false)
console.log(marathonDistance([4, 6, 8, 9, -4]), false)
console.log(marathonDistance([-20, 9, -10, -11]), false)
console.log(marathonDistance([-9, 15, 1]), true)
console.log(marathonDistance([]), false)
console.log(marathonDistance([]), false)