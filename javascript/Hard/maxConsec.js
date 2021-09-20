// https://edabit.com/challenge/kDKgBie4ktG2Qf8R3

function maxConsec(arr) {
     const a = Array.from(new Set(arr.sort((a,b)=> a-b)))
    console.log(a)
	let maxCount = 1
    const maxList = []
    for (let i = 1; i <=a.length; i++) {
        if ((a[i]-a[i-1])===1) {
        maxCount++;
        } 
        else {
            if(maxCount===0){
                continue;
            } else {
                maxList.push(maxCount)
                maxCount=1
            }
        }
        
    } return Math.max(...maxList)
}

console.log(maxConsec([4, 9, 10, 5, 17, 3, 8, 11, 1, 12, 18, 20]), 5);
// console.log(maxConsec([14, 13, 7, 1, 4, 12, 3, 7, 7, 12, 11, 5, 7]), 4);
// console.log(maxConsec([13, 3, 8, 5, 5, 2, 1, 13, 8, 6, 14, 2, 11, 4, 10, 8, 1, 10, 9]), 6);
// console.log(maxConsec([1, 4, 14, 9, 7, 9, 3, 13, 7, 4, 14, 11, 14, 8, 1, 11, 0, 1]), 3);
// console.log(maxConsec([2, 3, 7, 2, 14, 4, 7, 3, 10, 2, 8, 7, 14, 9, 5, 7,  3]), 4);
