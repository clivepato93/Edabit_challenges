// https://www.codewars.com/kata/514aa0dc21607ae236000017/train/javascript
//Debugging
/*
var name = 'Abe';
var greet_abe = function() {
  return "Hello, " + name + '!';
};
name = 'Ben';
var greet_ben = function() {
  return "Hello, " + name + '!';
};
*/

const greet_abe = function () {
  let name = "Abe";
  return "Hello, " + name + "!";
};
const greet_ben = function () {
  let name = "Ben";
  return "Hello, " + name + "!";
};

console.log(greet_abe(), "Hello, Abe!", "greet_abe() is not greeting Abe");
console.log(greet_ben(), "Hello, Ben!", "greet_ben() is not greeting Ben");
