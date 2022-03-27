// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript

function duplicateCount(text){
    //...
    let final = 0;
    const letters = [...text.toLowerCase()].sort();
    while(letters.length){
        const letter = letters[0];
        letters.slice(letters.indexOf(letter),letters.lastIndexOf(letter)+1).length>=2?final++:null;
        letters.splice(letters.indexOf(letter),letters.lastIndexOf(letter)+1)

        // console.log(letters)
    }
    return final
  }

console.log(duplicateCount(""), 0);
console.log(duplicateCount("abcde"), 0);
console.log(duplicateCount("aabbcde"), 2);
console.log(duplicateCount("aabBcde"), 2,"should ignore case");
console.log(duplicateCount("Indivisibility"), 1)
console.log(duplicateCount("Indivisibilities"), 2, "characters may not be adjacent")