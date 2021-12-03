// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/pig-latin

function translatePigLatin(str) {
    if((/^[aeiou]/).test(str)) return str+'way'
    const check = str.match(/^[^aeiou]+/)[0]
    if(check) return str.slice(check.length,)+str.slice(0,check.length)+'ay'
    return str+'way'
  }
  
console.log(  translatePigLatin("consonant"));
console.log(  translatePigLatin("glove"));
  // str.slice(1,)+str.slice(0)+'ay';