//https://www.codewars.com/kata/55c0ac142326fdf18d0000af/train/javascript
// Classes constructor
// This Cube class needs help
// Implement the constructor so that it can take an integer for the side or no args

/* class Cube {
  
  getSide() {
    return this.side; 
  }
  setSide(n) {
    this.side = Math.abs(n);
  }
}

*/
class Cube {
  constructor(side = 0) {
    this.side = side;
  }
  getSide() {
    return Math.abs(this.side);
  }
  setSide(n) {
    this.side = Math.abs(n);
  }
}

let cube = new Cube(12);

console.log(cube.getSide(), 12);
cube.setSide(42);

console.log(cube.getSide(), 42);
