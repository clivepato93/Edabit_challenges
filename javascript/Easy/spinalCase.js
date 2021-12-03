
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/spinal-tap-case

function spinalCase(str) {
    return str.match(/[A-Z|a-z][^A-Z_\- ]{1,}/g,).map(item=> item.toLowerCase()).join('-');
  }
  
 console.log(spinalCase('This Is Spinal Tap'));
 console.log( spinalCase("thisIsSpinalTap"));
 console.log( spinalCase("The_Andy_Griffith_Show"));
 console.log( spinalCase("Teletubbies say Eh-oh"));
 console.log( spinalCase("AllThe-small Things"));