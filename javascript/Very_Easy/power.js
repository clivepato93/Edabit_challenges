// https://www.codewars.com/kata/59fc72fe235f93838b002235/train/javascript

function power(x, y) {
  //SHOW ME WHAT YOU GOT!
  //   console.log(arguments);
  if (!y || Math.abs(x) == 1) return 1;
  const multi = x;
  while (y > 1) {
    x = x * multi;
    y--;
  }
  return x;
}

// console.log(power(1, 701270), 1);
// console.log(power(2, 2), 4);
// console.log(power(3, 2), 9);
// console.log(power(-1, 40), 1);
console.log(power(9, 8), 43046721);
