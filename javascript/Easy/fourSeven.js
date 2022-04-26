// https://www.codewars.com/kata/5ff50f64c0afc50008861bf0/solutions/javascript/me/best_practice

function fourSeven(n){
    // Your Code Here
    while (n == 4) return 7
    while (n == 7) return 4
    return 0
  }

console.log( fourSeven(4), "n = 4 should return 7");
console.log( fourSeven(7),"n = 7 should return 4");