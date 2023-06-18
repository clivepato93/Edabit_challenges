// https://www.codewars.com/kata/55e8aba23d399a59500000ce/solutions/javascript
// class default
class Hero {
  // add default values here
  constructor(name = "Hero") {
    this.name = name;
    //another way to setup default value   this.name = name || "Hero";
    this.position = "00";
    this.health = 100;
    this.damage = 5;
    this.experience = 0;
  }
}

let myHero = new Hero();
console.log(
  myHero.name,
  "Hero",
  "Hero should have a 'name' attribute with value \"Hero\""
);
console.log(
  myHero.experience,
  0,
  "Hero should have an 'experience' attribute with value 0"
);
console.log(
  myHero.health,
  100,
  "Hero should have a 'health' attribute with value 100"
);
console.log(
  myHero.position,
  "00",
  "Hero should have a 'position' attribute with value \"00\""
);
console.log(
  myHero.damage,
  5,
  "Hero should have a 'damage' attribute with value 5"
);
