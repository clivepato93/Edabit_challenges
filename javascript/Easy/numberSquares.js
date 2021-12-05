// https://edabit.com/challenge/RGQXN4TG2CQoBAReQ

function numberSquares(n) {
    return n*(n+1)*(2*n+1)/6
}

function numberSquares(n) {
    if(n==0){
        return 0
    } else{
        console.log(n)
        return (n*n)+numberSquares((n-1))
    }
}

console.log(numberSquares(3), 14)
console.log(numberSquares(12))