// https://www.codewars.com/kata/57cf50a7eca2603de0000090/train/javascript

function moveTen(s){
    const letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    return [...s].map(l=> letter[(letter.indexOf(l)+10)%26]).join('')
}

console.log(moveTen("testcase"), "docdmkco");
console.log(moveTen("codewars"), "mynogkbc");
console.log(moveTen("exampletesthere"), "ohkwzvodocdrobo");