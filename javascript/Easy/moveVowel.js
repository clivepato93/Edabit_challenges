// https://www.codewars.com/kata/56bf3287b5106eb10f000899/train/javascript

function moveVowel(input) {
  let i = 0;
  const inputLength = input.length;
  let finalStr = "";
  let vowel = "";
  while (i < inputLength) {
    const letter = input[i];
    if (/[aeiou]/.test(letter)) {
      vowel = vowel + letter;
    } else {
      finalStr = finalStr + letter;
    }
    i++;
  }
  return finalStr + vowel;
}

function moveVowel(input, i = 0, finalStr = [], vowel = []) {
  debugger;

  const inputLength = input.length;
  const letter = input[i];
  if (i < inputLength) {
    if (/[aeiou]/.test(letter)) {
      vowel.push(letter);
    } else {
      finalStr.push(letter);
    }
    i++;
    moveVowel(input, i, finalStr, vowel);
  }
  return finalStr.join("") + vowel.join("");
}

console.log(moveVowel("day"), "dya");
// console.log(moveVowel("apple"), "pplae");
// console.log(moveVowel("peace"), "pceae");
// console.log(moveVowel("maker"), "mkrae");
