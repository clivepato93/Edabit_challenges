// https://www.codewars.com/kata/55b051fac50a3292a9000025/train/javascript

// Regex \D or non-digit
var filterString = function (value) {
  //Complete this function :)
  return +value.replace(/[a-z]/gi, "");
};

console.log(filterString("123"), 123, `For the input "123"`);
console.log(filterString("a1b2c3"), 123, `For the input "a1b2c3"`);
console.log(filterString("aa1bb2cc3dd"), 123, `For the input "aa1bb2cc3dd"`);
