// https://edabit.com/challenge/9CP2euje5gAT6zzE6
// const sumCubes=(n) => ((n*(n+1))/2)**2 

const sumCubes=n => Array.from({length:n}, (_,i) => i+1).reduce((a,c)=> a+c**3,0)

console.log((sumCubes(6), 441))

