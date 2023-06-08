//www.codewars.com/kata/5a8059b1fd577709860000f6/train/javascript

function alphabetic(s) {
  // Yor code here
  const letters = [...s]
    .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
    .join("");
  return letters === s;
}

console.log(alphabetic("asd"), false);
console.log(alphabetic("codewars"), false);
console.log(alphabetic("door"), true);
console.log(alphabetic("cell"), true);
console.log(alphabetic("z"), true);
console.log(alphabetic(""), true);
