// https://www.codewars.com/kata/534ea96ebb17181947000ada/solutions/javascript/me/best_practice

function breakChocolate(n,m) {
    if ( n <= 0 || m <= 0 ) {
    return 0;
    }
      return n * m - 1;
    }

console.log(breakChocolate(5, 5) , 24)
console.log(breakChocolate(1, 1) , 0)