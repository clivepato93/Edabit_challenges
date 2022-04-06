
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
function solve(s){
  return Math.max(...s.match(/[aeiou]{1,}/g).map(el=> el.length))
 }

console.log(solve("codewarriors"),2);
console.log(solve("suoidea"),3);
console.log(solve("ultrarevolutionariees"),3);
console.log(solve("strengthlessnesses"),1);
console.log(solve("cuboideonavicuare"),2);
console.log(solve("chrononhotonthuooaos"),5);
console.log(solve("iiihoovaeaaaoougjyaw"),8);