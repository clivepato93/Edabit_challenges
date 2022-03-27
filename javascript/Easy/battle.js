// https://www.codewars.com/kata/595e9f258b763bc2d2000032/train/javascript

const alphabetHigh = ["A","B","C","D","E","F","G","H","I",
                  "J","K","L","M","N","O","P","Q","R","S","T",
                  "U","V","W","X","Y","Z"];

const alphabetLow = ["a","b","c","d","e","f","g","h","i","j",
                     "k","l","m","n","o","p","q","r","s","t",
                     "u","v","w","x","y","z"];


// function battle(x, y) {
//     // Lets the battle begin!

//     const xTotal = [...x].map(el=> 
//         alphabetHigh.indexOf(el)==-1?
//         (alphabetLow.indexOf(el)+1)/2: alphabetHigh.indexOf(el)+1)
//         .reduce((t,c)=> t+c,0)

//     const yTotal = [...y].map(el=> 
//         alphabetHigh.indexOf(el)==-1?
//         (alphabetLow.indexOf(el)+1)/2: alphabetHigh.indexOf(el)+1)
//         .reduce((t,c)=> t+c,0)
    
//     // console.log(xTotal,yTotal)
//     return xTotal== yTotal ?'Tie!':xTotal>yTotal? x:y;
//   }

// console.log( battle("One", "Two", "Two"));
// console.log( battle("One", "Neo", "One"));
// console.log( battle("One", "neO", "Tie!"));
// console.log( battle("Foo", "BAR", "Tie!"));
// console.log( battle("Four", "Five", "Four"));

// https://www.codewars.com/kata/595519279be6c575b5000016

function battle(x, y) {
    // Lets the battle begin!

    const xTotal = [...x].map(el=> el.charCodeAt(0)-64)
        .reduce((t,c)=> t+c,0)

    const yTotal = [...y].map(el=> el.charCodeAt(0)-64)
    .reduce((t,c)=> t+c,0)
    
    return xTotal== yTotal ?'Tie!':xTotal>yTotal? x:y;
  }

  console.log(battle("AAA", "Z"), "Z", "Unfair fight!");
  console.log(battle("ONE", "TWO"), "TWO", "Unfair fight!");
  console.log(battle("ONE", "NEO"), "Tie!", "Unfair fight!");
  console.log(battle("FOUR", "FIVE"), "FOUR", "Unfair fight!");
