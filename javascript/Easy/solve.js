
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

//https://www.codewars.com/kata/5635e7cb49adc7b54500001c/train/javascript


/* useful function */

// function solve(n) {
  // Your code here
  // const coins = [500,200,100,50,20,10];
  // const combo = [0,0,0,0,0,0];
    // for (let i = 0; i <coins.length ; i++) {
        // combo[i] = Math.floor(n / coins[i]);
        // n -= combo[i] * coins[i];
        // console.log(coins[i],combo[i],n)
    // }

    // return n?-1:combo.reduce((t,c)=>t+c,0)
// }

// console.log(solve(770), 4, "Wrong result for 770");
// console.log(solve(550), 2, "Wrong result for 550");
// console.log(solve(10), 1, "Wrong result for 10");
// console.log(solve(1250), 4, "Wrong result for 1250");


// https://www.codewars.com/kata/5a29a0898f27f2d9c9000058/train/javascript
/*
  might help when you need to recap on regex
*/

function solve(s){
  //..
  return [s.match(/[A-Z]/g||[]).length,s.match(/[a-z]/g||[]).length,s.match(/[0-9]/g||[]).length,s.match(/[^a-z0-9]/gi||[]).length]

  // return [s.match(/[A-Z]/g||[]).length,s.match(/[a-z]/g||[]).length,s.match(/[0-9]/g||[]).length,s.match(/[^a-z0-9]/gi||[]).length]
 }

//  better solution not mine though
 const solve = x => {
  let u = x.match(/[A-Z]/g)||[]
  let d = x.match(/[a-z]/g)||[]
  let n = x.match(/[0-9]/g)||[]
  let s = x.match(/[^A-Z0-9]/gi)||[]
  return [u.length, d.length, n.length, s.length]
}

 console.log(solve("Codewars@codewars123.com"),[1,18,3,2]);
//  console.log(solve("bgA5<1d-tOwUZTS8yQ"),[7,6,3,2]);
//  console.log(solve("P*K4%>mQUDaG$h=cx2?.Czt7!Zn16p@5H"),[9,9,6,9]);
//  console.log(solve("RYT'>s&gO-.CM9AKeH?,5317tWGpS<*x2ukXZD"),[15,8,6,9]);
//  console.log(solve("$Cnl)Sr<7bBW-&qLHI!mY41ODe"), [10,7,3,6])
//  console.log(solve("@mw>0=QD-iAx!rp9TaG?o&M%l$34L.nbft"), [7,13,4,10]);