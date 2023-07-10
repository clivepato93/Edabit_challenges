// https://www.codewars.com/kata/568018a64f35f0c613000054/train/javascript
//OOP throw Error
// class Guesser {
//   constructor(number, lives) {
//     this.number = number;
//     this.lives = lives;
//   }

//   guess(n) {
//     return false;
//   }
// }

class Guesser {
  constructor(number, lives) {
    this.number = number;
    this.lives = lives;
  }

  guess(n) {
    if (this.lives === 0) {
      throw new Error("already dead");
    }
    if (n === this.number) return true;

    if (n !== this.number) {
      this.lives -= 1;
      return false;
    }
  }
}

let guesser = new Guesser(10, 2);
console.log(guesser.guess(10));
console.log(guesser.guess(10));
console.log(guesser.guess(10));
console.log(guesser.guess(10));
