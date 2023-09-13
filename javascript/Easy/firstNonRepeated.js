// https://www.codewars.com/kata/570f6436b29c708a32000826/train/javascript

function firstNonRepeated(s) {
  // your code here
  s = [...s];
  return s.find((v) => s.indexOf(v) === s.lastIndexOf(v)) || null;
}

console.log(firstNonRepeated("test"), "e");
console.log(firstNonRepeated("teeter"), "r");
console.log(firstNonRepeated("1122321235121222"), "5");
console.log(firstNonRepeated("rend"), "r");
