// https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript

// function longest(s1, s2) {
    // your code
    // return [...new Set(s1+s2)].sort().join('')
//     // .sort((a,b)).join('')

//   }

// console.log(longest("aretheyhere", "yestheyarehere"), "aehrsty")
// console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"), "abcdefghilnoprstu")
// console.log(longest("inmanylanguages", "theresapairoffunctions"), "acefghilmnoprstuy")


// https://www.codewars.com/kata/58670300f04e7449290000e5/train/javascript

function longest(words) {
  return words.reduce((t,c)=> c.length>t?t=c.length:t=t,0)
}

console.log(longest(['simple', 'is', 'better', 'than', 'complex']), 7);
console.log(longest(['explicit', 'is', 'better', 'than', 'implicit']), 8);
console.log(longest(['beautiful', 'is', 'better', 'than', 'ugly']), 9);