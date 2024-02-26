// https://www.codewars.com/kata/5a7f58c00025e917f30000f1/train/javascript

function longest(str) {
  // Good luck :)
  let currentWord = "";
  let longestWord = "";
  for (let i = 0; i < str.length; i++) {
    debugger;
    console.log(str[i]);
    if (!str[i + 1] || str[i + 1].charCodeAt(0) < str[i].charCodeAt(0)) {
      currentWord += str[i];
      longestWord =
        longestWord.length < currentWord.length ? currentWord : longestWord;
      console.log(longestWord);
      currentWord = "";
    } else {
      currentWord += str[i];
    }
  }
  return longestWord;
}
console.log(longest("asd"), "as");
console.log(longest("asdfaaaabbbbcttavvfffffdf"), "aaaabbbbctt");
