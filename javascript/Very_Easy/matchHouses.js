// https://edabit.com/challenge/tYHkTdFrEmWfxpPKF

const matchHouses=(step) => step?(step*5)+1 :0;

console.log(matchHouses(1), 6)
console.log(matchHouses(0), 0)
console.log(matchHouses(17), 86)
console.log(matchHouses(36), 181)
console.log(matchHouses(15), 76)
console.log(matchHouses(99), 496)
console.log(matchHouses(3), 16)
console.log(matchHouses(87), 436)