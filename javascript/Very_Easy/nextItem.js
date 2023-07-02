//https://www.codewars.com/kata/542ebbdb494db239f8000046/train/javascript

// Symbol Iterator
function nextItem(xs, item) {
  // TODO: Implement me
  const arr = xs[Symbol.iterator]();
  for (const element of arr) {
    if (element === item) {
      return arr.next().value;
    }
  }
}

console.log(nextItem([1, 2, 3, 4, 5, 6, 7, 8], 5), 6);

console.log(nextItem(["a", "b", "c"], "d"), undefined);

console.log(nextItem(["a", "b", "c"], "c"), undefined);

console.log(nextItem("testing", "t"), "e");
