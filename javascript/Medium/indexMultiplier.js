// https://edabit.com/challenge/3Efavz8YmSBia4p8s

function indexMultiplier(arr) {
    return arr.reduce((total,curr,i)=> total+curr*i,0)
}

console.log(indexMultiplier([9, 3, 7, -7]), -4)
console.log(indexMultiplier([3, 8, 6, -4]), 8)
console.log(indexMultiplier([10, -9, -2, 0, 2]), -5)