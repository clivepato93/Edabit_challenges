
// https://edabit.com/challenge/Dq8kbbsLYyG9are5Z


function totalVolume(...boxes) {
    let final = 0
	for (let i = 0; i < boxes.length; i++) {
        const total = boxes[i].reduce((t,c)=> t*c,1)
        final+=total
        
    }
    return final 
}

const totalVolume = (...boxes) =>
boxes.reduce((a,b)=> a + b.reduce((c,d)=> c * d, 1), 0);

console.log(totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]), 63)
console.log(totalVolume([2, 2, 2], [2, 1, 1]), 10)
console.log(totalVolume([1, 1, 1]), 1)
console.log(totalVolume([5, 1, 10], [1, 9, 2]), 68)
console.log(totalVolume([1, 1, 5], [3, 3, 1]), 14)