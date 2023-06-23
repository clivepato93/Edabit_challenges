// https://www.codewars.com/kata/55a14aa4817efe41c20000bc/train/javascript
// OOP extends

class Animal {
  constructor(name, noise) {
    this.name = name;
    this.noise = noise;
  }

  speak() {
    return this.name + ` ${noise}.`;
  }
}

class Cat extends Animal {
  constructor(value) {
    super(value);
  }

  speak() {
    return this.name + " meows.";
  }
}

var cat = new Cat("Mr Whiskers");
console.log(cat.speak(), "Mr Whiskers meows.");
cat = new Cat("Lamp");
console.log(cat.speak(), "Lamp meows.");
cat = new Cat("$$Money Bags$$");
console.log(cat.speak(), "$$Money Bags$$ meows.");
