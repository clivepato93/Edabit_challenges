// https://www.codewars.com/kata/57a06b07cf1fa58b2b000252/train/javascript

function isItLetter(character) {
  return /[a-z]/i.test(character);
}

console.log(isItLetter("a"), true, `'a' is a letter`);
console.log(isItLetter("1"), false, `'1' is not a letter`);
