// https://edabit.com/challenge/cMLjrLbhFAswxhtFL

const journeyDistance= (num) => num===3? 1:num===0?0: Math.floor(num/2)

// console.log((journeyDistance(0), 0))
// console.log((journeyDistance(3), 1))
// console.log((journeyDistance(5), 2))
// console.log((journeyDistance(9), 4))

const a=journeyDistance(5)
console.log(a)