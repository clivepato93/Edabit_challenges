// https://www.codewars.com/kata/57a83e447cb1f32de80000d5/train/javascript

function lenR(x, i = 0) {
  if (x[0] === undefined) {
    return i;
  }
  return lenR(x.slice(1), i + 1);
}
console.log(lenR([1, 2, 3]), 3);
console.log(lenR([]), 0);
console.log(lenR([1]), 1);
