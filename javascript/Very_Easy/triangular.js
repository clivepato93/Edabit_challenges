// https://www.codewars.com/kata/525e5a1cb735154b320002c8/train/javascript
// https://www.mathsisfun.com/algebra/triangular-numbers.html
function triangular( n ) {
    return n<1?0:n*(n+1)/2
}

console.log( triangular(2), 3 )
console.log( triangular(4), 10 )