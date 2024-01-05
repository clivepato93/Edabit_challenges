// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript
function solution(str) {
  if (!str) return [];
  if (str.length % 2) {
    str = str + "_";
  }

  return str.match(/.{2}/g);
}

console.log(solution("abcdef"), ["ab", "cd", "ef"]);
console.log(solution("abcdefg"), ["ab", "cd", "ef", "g_"]);
console.log(solution(""), []);
