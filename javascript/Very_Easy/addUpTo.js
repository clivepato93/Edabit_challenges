// https://edabit.com/challenge/ygF4FR7ah2Bn9CNoz

/* recursive approach
function addUpTo(n) {
	if (n===1||n===0){
        return n
    } return n+addUpTo(n-1)
}
*/

/* loop way
function addUpTo(n) {
    let total = 0
	while (n!==0){
        total+=n
        n--
    } return total
}
*/

/* math way not my solution using as reference 
    const addUpTo = n => n * (n + 1) / 2;
*/

console.log(addUpTo(3), 6, "Example #1")
console.log(addUpTo(10), 55, "Example #2")