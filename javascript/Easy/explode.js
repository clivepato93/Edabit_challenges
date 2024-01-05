// function explode(s) {
//   return [...s].map((el) => el.repeat(+el)).join("");
// }

// const tests = [
//   ["312", "333122"],
//   ["102269", "12222666666999999999"],
//   ["0", ""],
//   ["000", ""],
//   ["123", "122333"],
// ];

// for (let i = 0; i < tests.length; i++) {
//   console.log(explode(tests[i][0]), tests[i][1], "Input: " + tests[i][0]);
// }

// https://www.codewars.com/kata/57eb936de1051801d500008a/train/javascript

function explode(x) {
  if (!x.some((val) => typeof val === "number")) return "Void!";
  const arrLength = x.reduce(
    (total, curr) => (total += typeof curr == "number" ? curr : 0),
    0
  );
  return Array.from({ length: arrLength }, (_, i) => x);
}

console.log(explode([9, 3]), [
  [9, 3],
  [9, 3],
  [9, 3],
  [9, 3],
  [9, 3],
  [9, 3],
  [9, 3],
  [9, 3],
  [9, 3],
  [9, 3],
  [9, 3],
  [9, 3],
]);
console.log(explode(["a", 3]), [
  ["a", 3],
  ["a", 3],
  ["a", 3],
]);
console.log(explode([6, "c"]), [
  [6, "c"],
  [6, "c"],
  [6, "c"],
  [6, "c"],
  [6, "c"],
  [6, "c"],
]);
console.log(explode(["a", "b"]), "Void!");
console.log(explode(["a", 0]), []);

function foo(n) {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < n; j++) {
      console.log(j);
    }
  }
}

foo(3);
