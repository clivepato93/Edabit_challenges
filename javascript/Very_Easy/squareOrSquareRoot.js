// https://www.codewars.com/kata/57f6ad55cca6e045d2000627/train/javascript

function squareOrSquareRoot(array) {
  return array.map((el) =>
    Number.isInteger(Math.sqrt(el)) ? Math.sqrt(el) : el ** 2
  );
}

console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1]), [2, 9, 3, 49, 4, 1]);
