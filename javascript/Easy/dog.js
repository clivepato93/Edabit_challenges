// https://www.codewars.com/kata/56951add53eccacf44000030/solutions/javascript

//OOP prototype
class Dog {
  constructor(name, age, breed, vaccinated, wormed) {
    this.name = name;
    this.age = age;
    this.breed = breed;
    this.vaccinated = vaccinated;
    this.wormed = wormed;
  }
}

Dog.prototype.checkDog = function () {
  if (this.vaccinated && this.wormed) {
    return this.name + " can be accepted";
  }

  if (!this.vaccinated && !this.wormed) {
    return this.name + " can not be accepted";
  }
  return this.name + " can only be accepted by itself";
};

var spot = new Dog("Spot", 5, "Labrador", true, false);
var riley = new Dog("Riley", 3, "GoldenDoodle", true, true);
var clive = new Dog("Clive", 8, "German Shepard", false, false);

console.log(spot.checkDog(), "Spot can only be accepted by itself");
console.log(riley.checkDog(), "Riley can be accepted");
console.log(clive.checkDog(), "Clive can not be accepted");
