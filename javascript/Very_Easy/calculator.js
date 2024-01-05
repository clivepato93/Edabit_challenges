// https://www.codewars.com/kata/5810085c533d69f4980001cf/train/javascript

function calculator(a, b, sign) {
  if (typeof a != typeof b) return "unknown value";
  const obj = {
    "+": (a, b) => a + b,
    "-": function (a, b) {
      return a - b;
    },
    "*": function (a, b) {
      return a * b;
    },
    "/": function (a, b) {
      return a / b;
    },
  };

  //   return obj.hasOwnProperty("+");
  return obj.hasOwnProperty(sign) ? obj[sign](a, b) : "unknown value";
}

console.log(calculator(1, 2, "+"), 3, "calculate");
console.log(calculator(1, 2, "-"), -1, "calculate");
console.log(calculator(3, 5, "*"), 15, "calculate");
console.log(calculator(6, 2, "/"), 3, "calculate");
console.log(calculator(6, 2, "$"), "unknown value", "calculate");
console.log(calculator(6, "h", "*"), "unknown value", "calculate");
