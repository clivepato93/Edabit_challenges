// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/pig-latin

function translatePigLatin(str) {
    const begin = str.match(/[^aeiou]+/)[0];
    if((/^[aeiou]/).test(str)){
        return str+'way'
    } return str.slice(begin.length,)+str.slice(0,begin.length)+'ay'
  }
  
 console.log( translatePigLatin("consonant"));
 console.log(translatePigLatin("paragraphs"));
 console.log(translatePigLatin("glove"));
 console.log(translatePigLatin("algorithm"))
 console.log(translatePigLatin("eight"))
 console.log(translatePigLatin("schwartz"))
 console.log(translatePigLatin("rhythm"))
 console.log()