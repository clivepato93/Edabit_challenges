// https://www.codewars.com/kata/52adc142b2651f25a8000643/train/javascript
// Prototype
function Sleigh() {}

Sleigh.prototype.authenticate = function (name, password) {
  // TODO
  return name === "Santa Claus" && password === "Ho Ho Ho!";
};

var sleigh = new Sleigh();

console.log(sleigh.authenticate("Santa Claus", "Ho Ho Ho!"));
