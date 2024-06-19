// https://www.codewars.com/kata/5546180ca783b6d2d5000062/train/javascript

function squares(x, n) {
  const arr = [];
  if (n <= 0) return arr;
  arr.push(x);
  for (let i = 2; i <= n; i++) {
    arr.push(x ** 2);

    x = x ** 2;
  }

  return arr;
}

console.log(squares(2, 5), [2, 4, 16, 256, 65536]);
console.log(squares(3, 3), [3, 9, 81]);
console.log(squares(5, 3), [5, 25, 625]);
console.log(squares(10, 4), [10, 100, 10000, 100000000]);

console.log(squares(2, 0), []);
console.log(squares(2, -5), []);
