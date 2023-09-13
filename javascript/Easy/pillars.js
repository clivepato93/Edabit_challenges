// https://www.codewars.com/kata/5bb0c58f484fcd170700063d/train/javascript

function pillars(numPill, dist, width) {
  // your code here
  if (numPill === 1) return 0;
  if (numPill === 2) return dist * 100;
  return dist * 100 * numPill - dist * 100 + width * (numPill - 2);
}

console.log(pillars(1, 10, 10), 0);
console.log(pillars(2, 20, 25), 2000);
console.log(pillars(11, 15, 30), 15270);
