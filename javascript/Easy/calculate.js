// https://www.codewars.com/kata/546ba103f0cf8f7982000df4/train/javascript
function calculate(n1, n2, o) {
  console.log(n1, n2, o);

  switch (o) {
    case "add":
      return (parseInt(n1, 2) + parseInt(n2, 2)).toString(2);

    case "subtract":
      return (parseInt(n1, 2) - parseInt(n2, 2)).toString(2);
    case "multiply":
      return (parseInt(n1, 2) * parseInt(n2, 2)).toString(2);
  }
}
// console.log(calculate("1", "1", "add"), "10");

// https://www.codewars.com/kata/5296455e4fe0cdf2e000059f/train/javascript

function calculate(num1, operation, num2) {
  //TODO: make a basic calculator.
  //   return
  const obj = {
    "+": () => {
      return num1 + num2;
    },
    "-": () => {
      return num1 - num2;
    },
    "*": () => {
      return num1 * num2;
    },
    "/": () => {
      return num1 / num2;
    },
  };
  return obj[operation] && Math.abs(obj[operation]()) != Infinity
    ? obj[operation]()
    : null;
}

console.log(calculate(3.2, "+", 8), 11.2, "3.2 + 8 = 11.2");
