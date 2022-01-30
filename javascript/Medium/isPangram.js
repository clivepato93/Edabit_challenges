// https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript

function isPangram(string){
    // 
    const letters = new Set( [...string.toLowerCase()].filter(el=> /[a-z]/.test(el)))
    return letters.size>=26
  }



console.log(isPangram( "The quick brown fox jumps over the lazy dog."), true)