// codewars.com/kata/5ee8ba31b44cc30032cbce04/train/javascript
const isConsecutive = (str) => {
  //Let's do it...
  if (str.length == 1) {
    return true;
  }
  const arr = [];
  for (let index = 0; index < str.length; index++) {
    const letter = str.indexOf(str[index]);
    const lastIndex = str.lastIndexOf(str[index]) + 1;
    const letters = str.slice(letter, str.lastIndexOf(str[index]) + 1);
    console.log(letters);
    if (letters.length === 1) {
      continue;
    }
    if (letters[0] !== letters.slice(-1) || letters[0] !== letters[1]) {
      return false;
    }
  }
  return true;
};

// console.log(isConsecutive("112200"), true);

console.log(isConsecutive("1222334556667"), true);

// console.log(isConsecutive("001234400522"), false);
// console.log(isConsecutive("67063"), false);

// console.log(isConsecutive("1"), true);
