// https://www.codewars.com/kata/58dbdccee5ee8fa2f9000058/train/javascript
// REGEX
function spEng(sentence) {
  //write your code here
  return /english/i.test(sentence);
}

console.log(spEng("egnlish"), false);
