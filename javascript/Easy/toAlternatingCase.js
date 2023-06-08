// https://www.codewars.com/kata/56efc695740d30f963000557/train/javascript

// Prototype
String.prototype.toAlternatingCase = function (callback) {
  // Define your method here :)
  const newLetter = (letter) => {
    if (/[a-z]/.test(letter)) return letter.toUpperCase();
    if (/[A-Z]/.test(letter)) return letter.toLowerCase();
    return letter;
  };
  const newWord = [];
  for (let i = 0; i < this.length; i++) {
    newWord.push(newLetter(this[i]));
  }
  return newWord.join("");
};

console.log("hello world".toAlternatingCase(), "HELLO WORLD");
