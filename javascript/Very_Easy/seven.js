// https://www.codewars.com/kata/55e6f5e58f7817808e00002e/train/javascript

// not yet complete
function seven(m) {
  let check = false;
  const x = 0;
  while (m % 7 != 0) {
    let numberString = +`${m}`.slice(0, -1);
    let multipler = +`${m}`.slice(-1);
    //   console.log(numberString, multipler);
    console.log(numberString - 2 * multipler);
    m = numberString - 2 * multipler;
  }
  return m;
}

// console.log(seven(1021), [10, 2]);
console.log(seven(1603), [7, 2]);
// console.log(seven(371), [35, 1]);
// console.log(seven(483), [42, 1]);
