// https://www.codewars.com/kata/56445cc2e5747d513c000033/train/javascript

function validate(message) {
  //your code here
  const arr = message.split(" ");
  if (arr.length !== 8) return false;
  for (let i = 0; i < arr.length; i++) {
    const section = arr[i];
    if (i == 0 && section !== "MDZHB") {
      return false;
    }

    if (i === 1 && /^[0-9]{2}$/g.test(section) == false) {
      return false;
    }

    if (i === 2 && /^[0-9]{3}$/g.test(section) == false) {
      return false;
    }

    if (i === 3 && /^[A-Z]+$/gi.test(section) === false) {
      return false;
    }

    if (i >= 4 && /^[0-9]{2}$/g.test(section) == false) {
      return false;
    }
  }
  return true;
}
// console.log(/^[A-Z]$/.test("KLASA"));
console.log(validate("MDZHB 12 733 6INITIAL 67 79 66 32"), false);
console.log(validate("MDZHB 85 596 KLASA 81 00 02 91"), true);
console.log(validate("MDZHB 12 733 EDINENIE 67 79 66 32"), true);
console.log(validate("MDZHV 60 130 VATRUKH 58 89 54 54"), false);
