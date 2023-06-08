// https://www.codewars.com/kata/5121303128ef4b495f000001/train/javascript

// Refactoring OOP
function greet(myName, yourName) {
  return "Hello " + yourName + ", my name is " + myName;
}

class Person {
  constructor(name) {
    this.name = name;
  }
  greet(yourName) {
    console.log(this.name, yourName);
    return "Hello " + yourName + ", my name is " + this.name;
  }
}
