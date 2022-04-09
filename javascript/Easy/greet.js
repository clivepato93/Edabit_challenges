// https://www.codewars.com/kata/535474308bb336c9980006f2/train/javascript

const greet = function(name) {
    const capitalised = [...name].map((letter,i)=> !i?letter.toUpperCase():letter.toLowerCase())
    return `Hello ${capitalised.join('')}!`
};

console.log(greet('riley'), 'Hello Riley!');