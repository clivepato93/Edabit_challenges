//www.codewars.com/kata/564e7fc20f0b53eb02000106/train/javascript
/*
Write a function consonantCount,
consonant_count or ConsonantCount 
that takes a string of English-language 
text and returns the number of consonants
in the string.

Consonants are all letters used to write English
excluding the vowels a, e, i, o, u.
*/

function consonantCount(str) {
  // ...

  let total = 0;

  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    if (/\d|\s|\_|[aeiouAEIOU]|\W/.test(letter) == false) {
      console.log(letter);
      total++;
      continue;
    }
  }

  return total;
}

// console.log(consonantCount(""), 0, "Test string is empty string");
// console.log(consonantCount("aaaaa"), 0, 'Test string: "aaaaa"');
// console.log(consonantCount("XaeiouX"), 2, 'Test string: "XaeiouX"');
// console.log(consonantCount("Bbbbb"), 5, 'Test string: "Bbbbb"');
// console.log(consonantCount("helLo world"), 7, 'Test string: "helLo world"');
// console.log(
//   consonantCount("h^$&^#$&^elLo world"),
//   7,
//   'Test string: "h^$&^#$&^elLo world"'
// );
// console.log(consonantCount("0123456789"), 0, 'Test string: "0123456789"');
console.log(consonantCount("012345_Cb"), 2, 'Test string: "012345_Cb"');
// [aeiouAEIOU]|
