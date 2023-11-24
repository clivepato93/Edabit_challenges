// https://www.codewars.com/kata/586efc2dcf7be0f217000619/train/javascript

function reverseSlice(str) {
  return Array.from({ length: str.length }, (_, i) =>
    [...str.slice(0, str.length - i)].reverse().join("")
  );
}

console.log(reverseSlice("123"), ["321", "21", "1"]);
console.log(reverseSlice("abcde"), ["edcba", "dcba", "cba", "ba", "a"]);
