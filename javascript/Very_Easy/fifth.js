
// https://edabit.com/challenge/ATFL4pNx3KTJzinAm


const fifth=(...x) => x[4] ? typeof x[4]:'Not enough arguments';
	



console.log((fifth('a',2,3,4,5),'number'))
console.log((fifth('zero','one','two','three','four','five'),"string"))
console.log((fifth(1,2,3,4,false),"boolean"))
console.log((fifth(),'Not enough arguments'))
console.log((fifth(1,2,3,4,5),'number'))
console.log((fifth(1,2,3),'Not enough arguments'))