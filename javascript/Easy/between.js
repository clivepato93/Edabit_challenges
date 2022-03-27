
// https://www.codewars.com/kata/55ecd718f46fba02e5000029/solutions/javascript/me/best_practice

function between(a, b) {
    // your code here
    return [...Array.from({length:Math.abs(a-b)+1},(_,i)=>i+a)]
  }