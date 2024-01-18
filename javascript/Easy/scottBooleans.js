// https://www.codewars.com/kata/63d1ba782de94107abbf85c3/train/javascript

const False = (f) => (t) => f;

const True = (f) => (t) => t;

const iff = (bool) => (x) => (y) => bool(y)(x);

console.log(False(0)(1), 0, `False(0)(1)`);
console.log(False(false)(true), false, `False(false)(true)`);
console.log(False("false")("true"), "false", `False("false")("true")`);

console.log(True(0)(1), 1, `True(0)(1)`);
console.log(True(false)(true), true, `True(false)(true)`);
console.log(True("false")("true"), "true", `True("false")("true")`);

console.log(iff(True)(1)(0), 1, `iff(True)(1)(0)`);
console.log(iff(False)(1)(0), 0, `iff(False)(1)(0)`);
console.log(iff(False)(true)(false), false, `iff(False)(true)(false)`);
console.log(iff(True)(true)(false), true, `iff(True)(true)(false)`);
console.log(
  iff(False)("true")("false"),
  "false",
  `iff(False)("true")(\false")`
);
console.log(iff(True)("true")("false"), "true", `iff(True)("true")("false")`);
