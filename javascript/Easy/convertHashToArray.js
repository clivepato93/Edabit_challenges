//  https://www.codewars.com/kata/59557b2a6e595316ab000046/train/javascript
// function asciiTotal(string) {
//   let total = 0;
//   for (let i = 0; i < string.length; i++) {
//     total += string[0].charCodeAt(0);
//   }
//   return total;
// }

function convertHashToArray(hash) {
  //your code here - sort the keys!
  const arr = [];
  for (const key in hash) {
    arr.push(key);
  }
  return arr.sort().map((key) => [key, hash[key]]);
  //   .sort((a, b);
}

console.log(convertHashToArray({ name: "Jeremy" }), [["name", "Jeremy"]]);
console.log(convertHashToArray({ name: "Jeremy", age: 24 }), [
  ["age", 24],
  ["name", "Jeremy"],
]);
console.log(
  convertHashToArray({ name: "Jeremy", age: 24, role: "Software Engineer" }),
  [
    ["age", 24],
    ["name", "Jeremy"],
    ["role", "Software Engineer"],
  ]
);
console.log(convertHashToArray({ product: "CodeWars", powerLevelOver: 9000 }), [
  ["powerLevelOver", 9000],
  ["product", "CodeWars"],
]);
console.log(convertHashToArray({}), []);
