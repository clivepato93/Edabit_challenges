// https://www.codewars.com/kata/58ff1c8b13b001a5a50005b4/train/javascript
// arrays sort method localeCompare
function sortAnimal(animal) {
  if (!animal) return [];
  const x = animal.slice();
  return x.sort((a, b) => {
    return a.numberOfLegs - b.numberOfLegs || a.name.localeCompare(b.name);
  });
}

console.log(
  sortAnimal([
    { name: "Cat", numberOfLegs: 4 },
    { name: "Snake", numberOfLegs: 0 },
    { name: "Dog", numberOfLegs: 4 },
    { name: "Pig", numberOfLegs: 4 },
    { name: "Human", numberOfLegs: 2 },
    { name: "Bird", numberOfLegs: 2 },
  ]),
  [
    { name: "Snake", numberOfLegs: 0 },
    { name: "Bird", numberOfLegs: 2 },
    { name: "Human", numberOfLegs: 2 },
    { name: "Cat", numberOfLegs: 4 },
    { name: "Dog", numberOfLegs: 4 },
    { name: "Pig", numberOfLegs: 4 },
  ]
);
