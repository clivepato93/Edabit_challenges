// https://www.codewars.com/kata/57cff961eca260b71900008f/train/javascript

/* 
REGEX
/[aeiou]/.test(string goes here) this regex test whether the
 string has any of the lowercase vowels within the string
 */
// String.fromCharCode
function isVow(a) {
  return a.map((number) =>
    /[aeiou]/.test(`${String.fromCharCode(number)}`)
      ? String.fromCharCode(number)
      : number
  );
}

console.log(
  isVow([
    118, 117, 120, 121, 117, 98, 122, 97, 120, 106, 104, 116, 113, 114, 113,
    120, 106,
  ]),
  [
    118,
    "u",
    120,
    121,
    "u",
    98,
    122,
    "a",
    120,
    106,
    104,
    116,
    113,
    114,
    113,
    120,
    106,
  ]
);
console.log(isVow([101, 121, 110, 113, 113, 103, 121, 121, 101, 107, 103]), [
  "e",
  121,
  110,
  113,
  113,
  103,
  121,
  121,
  "e",
  107,
  103,
]);
