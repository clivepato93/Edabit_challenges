// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/search-and-replace

function myReplace(str, before, after) {
    const word = str.slice(str.indexOf(before),(str.indexOf(before)+(before.length+1)));
    if(word[0]===before[0].toLowerCase()) return str.replace(`${before}`,after.replace(/^[\w]/,v=>v.toLowerCase()))
    else if(word[0]===before[0].toUpperCase()) return str.replace(`${before}`,after.replace(/^[\w]/,v=>v.toUpperCase()))
    // return str.replace(`${before}`,after.replace(/^\w/,v=>v.toUpperCase()))
    // return ;
    // return after.replace(/^\w/,v=>v.toUpperCase())
  }
  
console.log( myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
console.log( myReplace("I think we should look up there", "up", "Down"));
console.log( myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
