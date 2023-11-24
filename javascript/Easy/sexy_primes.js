// https://www.codewars.com/kata/56b58d11e3a3a7cade000792/train/javascript
function sexy_prime(x, y) {
  if (x === 1 || y === 1) return false;
  const divisors = [2, 3, 5, 7, 11, 13];
  function isNumberAPrime(number) {
    return (
      divisors.filter((num) => {
        if (num >= number) {
          return;
        }
        if (number % num == 0) {
          return num;
        }
      }).length > 0
    );
  }
  if (isNumberAPrime(x) || isNumberAPrime(y)) {
    return false;
  }
  return Math.abs(x - y) === 6;
}

// console.log(sexy_prime(5, 11), true);
// console.log(sexy_prime(13, 19), true);
// console.log(sexy_prime(83, 89), true);
// console.log(sexy_prime(1, 11), false);
// console.log(sexy_prime(1, 1), false);
console.log(sexy_prime(27, 21), false);
