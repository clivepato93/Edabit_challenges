// https://www.codewars.com/kata/56f69d9f9400f508fb000ba7/train/javascript


// useful function
function monkeyCount(n) {
    // your code here
      return Array.from({length:n},(_,i)=> i+1)
    }


console.log((monkeyCount(5)), [1, 2, 3, 4, 5]);
console.log((monkeyCount(3)), [1, 2, 3]);