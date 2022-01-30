// https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript


function squareSum(numbers){
    return numbers.reduce((t,c)=> t+c**2,0)
}

console.log(squareSum([1,2]), 5)
console.log(squareSum([0, 3, 4, 5]), 50)
console.log(squareSum([]), 0)