//www.codewars.com/kata/56c19316e8b139dff60006da/train/javascript

// prototype OOP
String.prototype.capitalize = function () {
  // this is the string

  /* charCodeAt() method returns the Unicode(integer) value of the character 
  at a specified index (position) in a string.
  */
  const x = this.slice(0, 1).charCodeAt(0);

  return String.fromCharCode(x <= 90 ? x : x - 32) + this.slice(1);
};

console.log("hello world".capitalize(), "Hello world");
console.log(
  "an apple a day keeps the doctor away".capitalize(),
  "An apple a day keeps the doctor away"
);
console.log(
  "today, I have a dream ... ".capitalize(),
  "Today, I have a dream ... "
);
console.log(
  "hello how are you?  i am john doe".capitalize(),
  "Hello how are you?  I am John Doe",
  "You were not asked to correct all of the capitalization errors in the string."
);

//www.codewars.com/kata/59cfc09a86a6fdf6df0000f1/train/javascript

//strings arrays
// used the index of the letter position to decide whether the letter was gonna be capitalized
function capitalize(s, arr) {
  return [...s]
    .map((letter, i) => (arr.indexOf(i) !== -1 ? letter.toUpperCase() : letter))
    .join("");
}

console.log(capitalize("abcdef", [1, 2, 5]), "aBCdeF");
console.log(capitalize("abcdef", [1, 2, 5, 100]), "aBCdeF");
console.log(capitalize("codewars", [1, 3, 5, 50]), "cOdEwArs");
console.log(capitalize("abracadabra", [2, 6, 9, 10]), "abRacaDabRA");
console.log(capitalize("codewarriors", [5]), "codewArriors");
console.log(capitalize("indexinglessons", [0]), "Indexinglessons");
