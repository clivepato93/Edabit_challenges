
// https://edabit.com/challenge/DBC7uCaN3yA4uGFQN
const repeatString = (txt, n) =>
typeof txt === 'string'? txt.repeat(n):"Not A String !!";

console.log(repeatString("Mubashir", 2), "MubashirMubashir")
console.log(repeatString("Matt", 3), "MattMattMatt")
console.log(repeatString(1990, 7), "Not A String !!")
console.log(repeatString("*", 3), "***")