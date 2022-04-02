


function sentencify(words) {
    words.sort()
    // TODO: Write your solution here!
    return words.map((word,i)=> i==0? word[i].toUpperCase()+word.slice(1):word).join(' ')+'.'
  }
  

console.log(
      sentencify(["i", "am", "an", "AI"])
    , "I am an AI.");
      
    console.log(
      sentencify(["yes"])
    , "Yes.");
    
    console.log(
      sentencify(["FIELDS","of","CORN","are","to","be","sown"])
    , "FIELDS of CORN are to be sown.");
    
    console.log(
      sentencify(["i'm","afraid","I","can't","let","you","do","that"])
    , "I'm afraid I can't let you do that.");

    console.log(2%0)