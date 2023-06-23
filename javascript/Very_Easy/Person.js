// https://www.codewars.com/kata/56f7f8215d7c12c0e7000b19/train/javascript

// OOP static
class Person {
  // Get coding in ES6 :D
  constructor(firstName = "John", lastName = "Doe", age = 0, gender = "Male") {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
  }

  sayFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  static greetExtraTerrestrials(race) {
    return "Welcome to Planet Earth " + race;
  }
}
