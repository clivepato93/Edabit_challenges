// https://www.codewars.com/kata/54bb6f887e5a80180900046b/train/javascript

function longestPalindrome(s) {
  //your code here
  let longest = 0;
  for (let i = 0; i < s.length; i++) {
    // debugger;
    for (let j = s.length - 1; j >= i; j--) {
      const word = s.slice(i, j + 1);
      //   console.log(word.slice(0, Math.ceil(j / 2) + 1));
      const a = word.slice(
        0,
        word.length % 2
          ? Math.floor(word.length / 2)
          : Math.ceil(word.length / 2)
      );
      const b = [...word.slice(Math.ceil(word.length / 2))].reverse().join("");
      if (a == b) {
        longest = longest > word.length ? longest : word.length;
      }
    }
  }
  return longest;
}
console.log(longestPalindrome("a"), 1);
console.log(longestPalindrome("aa"), 2);
console.log(longestPalindrome("baa"), 2);
console.log(longestPalindrome("aab"), 2);
console.log(longestPalindrome("zyabyz"), 1);

console.log(longestPalindrome("BaaBcd"), 4);
console.log(longestPalindrome("baablkj12345432133d"), 9);

console.log(longestPalindrome("kj12345432133d"), 9);

// console.log(longestPalindrome(""), 0);
// console.log(longestPalindrome("Aa"), 1);
