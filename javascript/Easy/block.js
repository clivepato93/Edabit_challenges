// codewars.com/kata/55b75fcf67e558d3750000a3/train/javascript

class Block {
  constructor(data) {
    // ...
    this.width = data[0];
    this.length = data[1];
    this.height = data[2];
  }

  getWidth() {
    return this.width;
  }

  getLength() {
    return this.length;
  }

  getHeight() {
    return this.height;
  }

  getVolume() {
    return this.width * (this.length * this.height);
  }

  getSurfaceArea() {
    return (
      2 *
      (this.length * this.width +
        this.length * this.height +
        this.width * this.height)
    );
  }
}

// let block = new Block([2, 4, 6]);

// console.log(block.getWidth(), 2);
// console.log(block.getLength(), 4);
// console.log(block.getHeight(), 6);
// console.log(block.getVolume(), 48);
// console.log(block.getSurfaceArea(), 88);

let block2 = new Block([73, 47, 100]);

console.log(block2.getWidth(), 3);
console.log(block2.getLength(), 4);
console.log(block2.getHeight(), 5);
console.log(block2.getVolume(), 60);
console.log(block2.getSurfaceArea(), 141);

console.log(2 * (47 * 73 + 47 * 100 + 73 * 100));
