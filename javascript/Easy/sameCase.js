// https://www.codewars.com/kata/5dd462a573ee6d0014ce715b/solutions/javascript

function sameCase(a, b){
    const upperCases = (a,b)=> a.toUpperCase()===a && b.toUpperCase()===b;
    const lowerCases = (a,b)=> a.toLowerCase()===a && b.toLowerCase()===b;
    const isLetter = (letter)=>  (/[a-z]/i).test(letter);
    
    return !isLetter(a)||! isLetter(b)?-1:lowerCases(a,b)||upperCases(a,b)?1:0


  }

//    console.log( sameCase('C', 'B'), 1);
//    console.log( sameCase('b', 'a'), 1);
//    console.log( sameCase('d', 'd'), 1);
//    console.log( sameCase('A', 's'), 0);
//    console.log( sameCase('c', 'B'), 0);
//    console.log( sameCase('b', 'Z'), 0);
   console.log( sameCase('\t', 'Z'), -1);
   console.log(sameCase("_","8")-1)
//    console.log( sameCase('H', ':'), -1);