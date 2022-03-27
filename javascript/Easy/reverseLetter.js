// https://www.codewars.com/kata/58b8c94b7df3f116eb00005b/train/javascript

function reverseLetter(str) {
    //coding and coding..
    return [...str].filter(el=> (/[a-z]/).test(el)).reverse().join('')
    
  }

console.log(reverseLetter("krishan"),"nahsirk")

console.log(reverseLetter("ultr53o?n"),"nortlu")
  
console.log(reverseLetter("ab23c"),"cba")
  
console.log(reverseLetter("krish21an"),"nahsirk")