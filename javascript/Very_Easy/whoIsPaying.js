//https://www.codewars.com/kata/58bf9bd943fadb2a980000a7/solutions/javascript
//Strings
function whoIsPaying(name) {
  //your code here
  if (name.length <= 2) {
    return [name];
  }
  console.log(name);
  return [name, name.slice(0, 2)];
}

console.log(whoIsPaying("Mexico"), ["Mexico", "Me"]);
console.log(whoIsPaying("Melania"), ["Melania", "Me"]);
console.log(whoIsPaying("Melissa"), ["Melissa", "Me"]);
console.log(whoIsPaying("Me"), ["Me"]);
console.log(whoIsPaying(""), [""]);
console.log(whoIsPaying("I"), ["I"]);
