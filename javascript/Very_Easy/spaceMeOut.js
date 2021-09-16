https://edabit.com/challenge/8zbTPvexR9Aei3Csp

// my solution
// const spaceMeOut = (str) => str.split('').join(' ');

// Another solution I seen 
// const spaceMeOut = str => [...str].join(' ');

function spaceMeOut(str){
    var arr = Array.from(str).join(' ')
    return arr
}

console.logß(spaceMeOut("space"), "s p a c e", "Example #1")
console.logß(spaceMeOut("far out"), "f a r   o u t", "Example #2")
console.logß(spaceMeOut("elongated musk"), "e l o n g a t e d   m u s k", "Example #3")
console.logß(spaceMeOut("long"), "l o n g")
console.logß(spaceMeOut("123"), "1 2 3")
console.logß(spaceMeOut("a1b2c3"), "a 1 b 2 c 3")
