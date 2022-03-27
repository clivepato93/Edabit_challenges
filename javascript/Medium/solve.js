// https://www.codewars.com/kata/59c633e7dcc4053512000073/train/javascript

// version one but not that readable
function solve(s) {
    return Math.max(...s.split(/[aeiou]/g).map(letters=> 
        [...letters].reduce((t,c) => t+(c.charCodeAt(0)-96),0)))
  };
// version 2
  function solve(s) {
    // return Math.max(...s.split(/[aeiou]/g).map(letters=> 
    //     [...letters].reduce((t,c) => t+(c.charCodeAt(0)-96),0)))
    const chunks = s.split(/[aeiou]/g).filter(el=> el);
    chunks.forEach((chunk,i) => {
        const x = [...chunk];
        console.log(x)
    });

  };

// console.log(solve("zodiac"),26);
// console.log(solve("chruschtschov"),80);
// console.log(solve("khrushchev"),38);
// console.log(solve("strength"),57);
// console.log(solve("catchphrase"),73);
// console.log(solve("twelfthstreet"),103);
console.log(solve("mischtschenkoana"),80);