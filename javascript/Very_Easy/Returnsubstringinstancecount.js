// https://www.codewars.com/kata/5168b125faced29f66000005/train/javascript

function solution(fullText, searchText) {
  const re = new RegExp(searchText, "g");
  const matches = fullText.match(re);
  return matches;
}

console.log(solution("abcdeb", "b"), 2);
console.log(solution("abc", "b"), 1);
console.log(solution("abbc", "bb"), 1);
