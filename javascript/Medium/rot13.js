// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher



// function rot13(str) {
//     const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
//     return str.replace(/\w/g,letter => alphabet[ (alphabet.indexOf(letter)+13)%26]);
//   }
  
//  console.log( rot13("SERR PBQR PNZC"));


 function countup(n) {
    if (n < 1) {
      return [];
    } else {
      const countArray = countup(n - 1);
      console.log(n,countArray)
      countArray.push(n);
      return countArray;
    }
  }

  // function countup(n) {
  //   return n<1? []: [...countup(n-1)].concat(n);
  //   }

    // .concat[n]
  console.log(countup(5));