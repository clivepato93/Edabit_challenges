// https://www.codewars.com/kata/57a62154cf1fa5b25200031e/train/javascript

function alternateCase(s) {
s=s.split('');
const newLetter = (letter)=> {
    if(letter.charCodeAt(0)>=65 && letter.charCodeAt(0)<=90){
        return letter.toLowerCase();    
    } else if(letter.charCodeAt(0)>=97 && letter.charCodeAt(0)<=122) {
        return letter.toUpperCase()
    }
    return letter;
};
// const final = [];

// for (let i = 0; i < s.length; i++) {
//     final.push(newLetter(s[i]))
// }

// return final.join('')
// return [...s].map(el=> newLetter(el)).join('')

return [...s].reduce((t,el)=> t+newLetter(el),'')
}

console.log(alternateCase("abc"), "ABC");
console.log(alternateCase("ABC"), "abc");
console.log(alternateCase("Hello World"), "hELLO wORLD"); 

// console.log(newLetter('s'))