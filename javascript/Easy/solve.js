
/*
function solve(s){
    //..
  const uWords = [...s].filter(el=> el== el.toUpperCase()).length
  const lWords = [...s].filter(el=> el== el.toLowerCase()).length
  return uWords>lWords?s.toUpperCase():s.toLowerCase();
}
*/

// https://www.codewars.com/kata/5bc052f93f43de7054000188/train/javascript

/*
function solve(a,b){
  //..
  if(a===b|| a.replace('*','')===b) return true

  const indexOfS = a.indexOf('*')
  const extract = b.slice(indexOfS,indexOfS+(b.length-a.length+1));
  a = a.replace('*',extract);
  // console.log(a,extract)
  return a===b

}

console.log(solve("code*s","codewars"),true)
console.log(solve("codewar*s","codewars"), true)
console.log(solve("code*warrior","codewars"),false)
console.log(solve("c","c"),true)
console.log(solve("*s","codewars"),true)
console.log(solve("*s","s"), true)
console.log(solve("s*","s"),true)
console.log(solve("aa","aaa"), false)
console.log(solve("aa*","aaa"), true)
console.log(solve("aaa","aa"), false)
console.log(solve("aaa*","aa"), false)
console.log(solve("*","codewars"),true)
*/

// https://www.codewars.com/kata/59c5f4e9d751df43cf000035/train/javascript
// function solve(s){
//   return Math.max(...s.match(/[aeiou]{1,}/g).map(el=> el.length))
//  }

// console.log(solve("codewarriors"),2);
// console.log(solve("suoidea"),3);
// console.log(solve("ultrarevolutionariees"),3);
// console.log(solve("strengthlessnesses"),1);
// console.log(solve("cuboideonavicuare"),2);
// console.log(solve("chrononhotonthuooaos"),5);
// console.log(solve("iiihoovaeaaaoougjyaw"),8);

// https://www.codewars.com/kata/59d9ff9f7905dfeed50000b0/train/javascript

// function solve(arr){  
//   //code
//   const alphabet = 
//   ["A","B","C","D","E","F","G","H","I",
//    "J","K","L","M","N","O","P","Q","R",
//    "S","T","U","V","W","X","Y","Z"];

//   const asciiPositions = function (letters) {
//     let total = 0
//     const newWord = [...letters].map(l=> l.toUpperCase())
//     newWord.forEach((letter,i) => {
//       if(alphabet.indexOf(letter)==i) total++;
//     });
//     return total
//   }
//   return arr.map(word=>asciiPositions(word))
//   };

// console.log(solve(["abode","ABc","xyzD"]),[4,3,1]);
// console.log(solve(["abide","ABc","xyz"]),[4,3,0]);
// console.log(solve(["IAMDEFANDJKL","thedefgh","xyzDEFghijabc"]),[6, 5, 7]);
// console.log(solve(["encode","abc","xyzD","ABmD"]),[1, 3, 1, 3]);

https://www.codewars.com/kata/5635e7cb49adc7b54500001c/train/javascript

function solve(n) {
  // Your code here
  const coins = [500,200,100,50,20,10];
  const combo = [0,0,0,0,0,0];
    for (let i = 0; i <coins.length ; i++) {
        combo[i] = Math.floor(n / coins[i]);
        n -= combo[i] * coins[i];
        // console.log(coins[i],combo[i],n)
    }

    return n?-1:combo.reduce((t,c)=>t+c,0)
}

console.log(solve(770), 4, "Wrong result for 770");
// console.log(solve(550), 2, "Wrong result for 550");
// console.log(solve(10), 1, "Wrong result for 10");
// console.log(solve(1250), 4, "Wrong result for 1250");