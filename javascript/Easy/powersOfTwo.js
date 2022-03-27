// https://www.codewars.com/kata/57a083a57cb1f31db7000028/train/javascript

function powersOfTwo(n){
    return Array.from({length: n+1}, (_, i)=> i).map(el=> 2**el)
}

console.log(powersOfTwo(0), [1])
console.log(powersOfTwo(1), [1, 2])
console.log(powersOfTwo(4), [1, 2, 4, 8, 16])