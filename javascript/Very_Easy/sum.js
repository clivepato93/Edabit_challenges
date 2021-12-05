// https://edabit.com/challenge/uYQs3cBqPEsk9mdZB

/*
function sum(n) {
	if(n===1){
        return 1
    } return n+sum(n-1)
}

const sum= n => n!==1?n+sum(n-1): 1;

console.log(sum(1), 1)
console.log(sum(5), 15)
console.log(sum(7), 28)
console.log(sum(10), 55)
console.log(sum(12), 78)

*/


// https://edabit.com/challenge/reR3jdfJnREauJj8d

function sum(arr) {
    if(arr.length==0) return 0
    else{
        const x  = sum(arr.slice(1))
        return arr[0]+x
    }
}


console.log(sum([1, 2, 3, 4]), 10);
console.log(sum([-1, -1, -1]), -3);
console.log(sum([1]), 1);
console.log(sum([]), 0);