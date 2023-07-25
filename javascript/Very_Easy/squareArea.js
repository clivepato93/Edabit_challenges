function squareArea(A) {
  const r = (4 * A) / (2 * Math.PI);
  return r * r;
}

console.log(squareArea(2), 1.62, 1e-2);

console.log(squareArea(0), 0, 1e-2);

console.log(squareArea(14.05), 80, 1e-2);
