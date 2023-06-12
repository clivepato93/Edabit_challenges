// https://www.codewars.com/kata/57238766214e4b04b8000011/train/javascript
// switchcase string repeat trim
let actual = "£1";

function changeMe(moneyIn) {
  // Write your function here
  switch (moneyIn) {
    case "£5":
      return "20p ".repeat(500 / 20).trim();

    case "£2":
      return "20p ".repeat(200 / 20).trim();

    case "£1":
      return "20p ".repeat(100 / 20).trim();

    case "50p":
      return "20p 20p 10p";

    case "20p":
      return "10p 10p";

    default:
      return moneyIn;
  }
}

// console.log(changeMe(changeMe("Money")), "Money");
// console.log(changeMe(actual), "20p 20p 20p 20p 20p");
console.log(changeMe("20p"), "10p 10p");
