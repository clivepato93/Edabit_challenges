// https://www.codewars.com/kata/55a12bb8f0fac1ba340000aa/train/javascript

var FindFunction = function (func, arr) {
  //   return //Complete this function
  const f = func.find((el) => typeof el == "function");
  return arr.filter((num) => f(num));
};

console.log(
  FindFunction([(a) => a % 2 == 0, 9, 3, 1, 0], [1, 2, 3, 4]),
  [2, 4]
);
console.log(FindFunction([9, 3, (a) => a % 2, 1, 0], [1, 2, 3, 4]), [1, 3]);
