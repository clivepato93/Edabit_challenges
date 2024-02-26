// https://www.codewars.com/kata/51689e27fe9a00b126000004/train/javascript

function formatWords(words) {
  words = words.filter((word) => word);
  let final = "";
  for (let i = words.length - 1; i >= 0; i--) {
    if (!words[i]) continue;
    if (i == words.length - 1) {
      final = words[i];
    } else if (i == words.length - 2) {
      final = words[i] + " and " + final;
    } else {
      final = words[i] + ", " + final;
    }
  }
  return final;
}

// console.log(
//   formatWords(["one", "two", "three", "four"]),
//   "one, two, three and four",
//   "formatWords(['one', 'two', 'three', 'four'] should return 'one, two, three and four'"
// );
// console.log(
//   formatWords(["one"]),
//   "one",
//   "formatWords(['one']) should return 'one'"
// );
console.log(
  formatWords(["one", "", "three"]),
  "one and three",
  "formatWords(['one', '', 'three']) should return 'one and three'"
);
// console.log(
//   formatWords(["", "", "three"]),
//   "three",
//   "formatWords(['', '', 'three']) should return 'three'"
// );
// console.log(
//   formatWords(["one", "two", ""]),
//   "one and two",
//   "formatWords(['one', 'two', '']) should return 'one and two'"
// );
console.log(formatWords([]), "", 'formatWords([]) should return ""');
// console.log(formatWords(null), "", 'formatWords(null) should return ""');
// assert.strictEqual(formatWords([""]), "", 'formatWords([""]) should return ""');
