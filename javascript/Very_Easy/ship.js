// https://www.codewars.com/kata/54fe05c4762e2e3047000add/train/javascript

/*
function Ship(draft, crew) {
  this.draft = draft;
  this.crew = crew;
}

Ship.prototype.isWorthIt = function () {
  return this.draft - this.crew * 1.5 >= 20 ? true : false;
};*/

class Ship {
  constructor(draft, crew) {
    this.draft = draft;
    this.crew = crew;
  }

  isWorthIt() {
    return this.draft - 1.5 * this.crew > 20;
  }
}

const titanic = new Ship(15, 10);

console.log(titanic.isWorthIt());
