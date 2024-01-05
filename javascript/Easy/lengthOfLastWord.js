// https://leetcode.com/problems/length-of-last-word/

var lengthOfLastWord = function (s) {
  const word = s.split(/\s+/).filter((el) => el);
  console.log(word);
  return word[word.length - 1].length;
};

var lengthOfLastWord = function (s) {
  const word = s.match(/\w{1,}(?=\s{0,})/g);
  console.log(word);
  return word[word.length - 1].length;
};
console.log(lengthOfLastWord("luffy is still joyboy"), 6);
console.log(lengthOfLastWord("Hello World"), 5);
console.log(lengthOfLastWord("   fly me   to   the moon  "), 4);
