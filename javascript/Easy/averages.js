// https://www.codewars.com/kata/57d2807295497e652b000139/train/javascript

function averages(numbers) {
  return numbers
    ? Array.from({ length: numbers.length - 1 }, (_, i) => {
        return numbers.slice(i, i + 2).reduce((t, c) => t + c, 0) / 2;
      })
    : [];
}

console.log(averages([2, 2, 2, 2, 2]), [2, 2, 2, 2]);
console.log(averages([2, -2, 2, -2, 2]), [0, 0, 0, 0]);
console.log(averages([1, 3, 5, 1, -10]), [2, 4, 3, -4.5]);
