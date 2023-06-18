//https://www.codewars.com/kata/55c933c115a8c426ac000082/train/javascript
// Refactoring switch case

function evalObject(value) {
  var result = 0;
  switch (value.operation) {
    case "+":
      result = value.a + value.b;
    case "-":
      result = value.a - value.b;
    case "/":
      result = value.a / value.b;
    case "*":
      result = value.a * value.b;
    case "%":
      result = value.a % value.b;
    case "^":
      result = Math.pow(value.a, value.b);
  }
  return result;
}

function evalObject(value) {
  switch (value.operation) {
    case "+":
      return value.a + value.b;
    case "-":
      return value.a - value.b;
    case "/":
      return value.a / value.b;
    case "*":
      return value.a * value.b;
    case "%":
      return value.a % value.b;
    case "^":
      return Math.pow(value.a, value.b);
    default:
      return "Operation is invalid";
  }
}

function evalObject(value) {
  var result = 0;
  switch (value.operation) {
    case "+":
      result = value.a + value.b;
      break;
    case "-":
      result = value.a - value.b;
      break;
    case "/":
      result = value.a / value.b;
      break;
    case "*":
      result = value.a * value.b;
      break;
    case "%":
      result = value.a % value.b;
      break;
    case "^":
      result = Math.pow(value.a, value.b);
      break;
    default:
      return "Operation is invalid";
  }
  return result;
}
