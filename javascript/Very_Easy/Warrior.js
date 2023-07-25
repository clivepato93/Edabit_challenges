// https://www.codewars.com/kata/53f9ee9f64b19d4b1d0001ed/train/javascript

//Debugging
// Original code
/*
function Warrior(n){
  name = n;  
  this.name = function(n){
    if( n ) name=n;
    return name;
  }
}
  
Warrior.prototype.toString = function(){
    return "Hi! my name's "+this.name();
}


*/

function Warrior(n) {
  this.warriorName = n;
  this.name = function (n) {
    if (n) this.warriorName = n;
    return this.warriorName;
  };
}

Warrior.prototype.toString = function () {
  return "Hi! my name's " + this.warriorName;
};

const albert = new Warrior("Albert");
const boris = new Warrior("Boris");
console.log(boris.name());
console.log(albert.toString(), "Hi! my name's Albert");
// console.log(albert.name(), "Albert");
// console.log(boris.name(), "Boris");

// boris.name("Bobo");
// console.log(boris.name(), "Bobo");
