//https://www.codewars.com/kata/56f935002e6c0d55fa000d92/train/javascript

class Animal {
  constructor(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, status);
    // this.name = name;
    // this.age = age;
    this.legs = 0;
    this.species = "shark";
    this.status = status;
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, status);
    this.legs = 4;
    this.species = "cat";
    this.status = status;
  }

  introduce() {
    return super.introduce() + `  Meow meow!`;
  }
  // Do the same here as you did for Shark - define your constructor function and any other methods you need
}

class Dog extends Animal {
  // On your own now - you can do it :D
  constructor(name, age, status, master) {
    super(name, age, status);
    this.legs = 4;
    this.species = "dog";
    this.status = status;
    this.master = master;
  }

  greetMaster() {
    return "Hello " + this.master;
  }
}

// var billy = new Shark("Billy", 3, "Alive and well");
// console.log(billy.name, "Billy");
// console.log(billy.age, 3);
// console.log(billy.legs, 0);
// console.log(billy.species, "shark");
// console.log(billy.status, "Alive and well");
// console.log(billy.introduce(), `Hello, my name is Billy and I am 3 years old.`);

// var cathy = new Cat("Cathy", 7, "Playing with a ball of yarn");
// console.log(cathy.name, "Cathy");
// console.log(cathy.age, 7);
// console.log(cathy.legs, 4);
// console.log(cathy.species, "cat");
// console.log(cathy.status, "Playing with a ball of yarn");
// console.log(
//   cathy.introduce(),
//   "Hello, my name is Cathy and I am 7 years old.  Meow meow!"
// );

var doug = new Dog("Doug", 12, "Serving his master", "Eliza");
console.log(doug.name, "Doug");
console.log(doug.age, 12);
console.log(doug.legs, 4);
console.log(doug.species, "dog");
console.log(doug.status, "Serving his master");
console.log(doug.introduce(), "Hello, my name is Doug and I am 12 years old.");
console.log(doug.greetMaster(), "Hello Eliza");

// https://www.codewars.com/kata/513e1e47c600c93cef000001/train/javascript
// toString
class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  toString() {
    return `${this.name} is a ${this.type}`;
  }
}
