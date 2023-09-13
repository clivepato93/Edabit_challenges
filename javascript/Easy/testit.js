// https://www.codewars.com/kata/56d93f249c844788bc000002/train/javascript
function testit(s) {
  const letters = [];
  for (let i = 0; i < s.length; i++) {
    let current = s[i];
    if (s[i + 1] === " " || i == s.length - 1) {
      letters.push(current.toUpperCase());
    } else {
      letters.push(current);
    }
  }

  return letters.join("");
}

// console.log(testit(""), "", "");
// console.log(testit("a"), "A", "");
// console.log(testit("b"), "B", "");
// console.log(testit("a a"), "A A", "");
// console.log(testit("a b"), "A B", "");
// console.log(testit("a b c"), "A B C", "");

// https://www.codewars.com/kata/56eff1e64794404a720002d2/train/javascript

function testit(s) {
  s = s.toLowerCase();
  const letters = ["w", "o", "r", "d"];
  let index = 0;
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    if (letters[index] === s[i]) {
      // console.log("t");
      index += 1;
      if (index === 4) {
        total += 1;
        index = 0;
      }
    }
  }

  return total;
}

console.log(testit("word"), 1);
console.log(
  testit(
    "OdOwRRRddoOwrDrWWwrWoddRoOodrRdDrDDdwRoDordrOWDdRwodwrRdORowDRWWDwowRRwrWDDdrdorDWOOorroDRDDoWOwOd"
  ),
  6
);
