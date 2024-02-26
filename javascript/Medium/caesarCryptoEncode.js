// https://www.codewars.com/kata/576fac714bc84c312c0000b7/train/javascript

function CaesarCryptoEncode(text, shift) {
  const lowercaseAlphabetArr = [];
  const uppercaseAlphabetArr = [];
  const lowercaseAlphabet = {};
  const uppercaseAlphabet = {};

  for (let i = 0; i < 26; i++) {
    const lowercaseLetter = String.fromCharCode(97 + i); // ASCII code for 'a' is 97
    const uppercaseLetter = String.fromCharCode(65 + i); // ASCII code for 'A' is 65
    lowercaseAlphabetArr.push(String.fromCharCode(97 + i)); // ASCII code for 'a' is 97
    uppercaseAlphabetArr.push(String.fromCharCode(65 + i)); // ASCII code for 'A' is 65
    lowercaseAlphabet[lowercaseLetter] = i + 1;
    uppercaseAlphabet[uppercaseLetter] = i + 1;
  }

  // console.log("Lowercase Alphabet:", lowercaseAlphabet);
  // console.log("Uppercase Alphabet:", uppercaseAlphabet);
  const letters = [];
  for (let i = 0; i < text.length; i++) {
    debugger;
    const letter = text[i];
    if (!/[a-zA-z]/.test(letter)) {
      letters.push(letter);
    } else if (
      lowercaseAlphabet[letter] &&
      shift < 0 &&
      lowercaseAlphabet[letter] + shift - 1 < 27
    ) {
      letters.push(lowercaseAlphabetArr[lowercaseAlphabet[letter] + shift - 1]);
    } else if (
      lowercaseAlphabet[letter] &&
      lowercaseAlphabet[letter] < 24 &&
      lowercaseAlphabet[letter] + shift - 1 < 27
    ) {
      letters.push(lowercaseAlphabetArr[lowercaseAlphabet[letter] + shift - 1]);
    } else if (lowercaseAlphabet[letter] + shift - 1 >= 27) {
      const sum = uppercaseAlphabet[letter.toUpperCase()] - 1 + (shift - 1);
      letters.push(uppercaseAlphabetArr[sum % 25]);
    } else if (
      uppercaseAlphabet[letter] &&
      shift < 0 &&
      uppercaseAlphabet[letter] + shift - 1 < 27
    ) {
      letters.push(uppercaseAlphabetArr[uppercaseAlphabet[letter] + shift - 1]);
    } else if (
      uppercaseAlphabet[letter] &&
      uppercaseAlphabet[letter] < 24 &&
      uppercaseAlphabet[letter] + shift - 1 < 27
    ) {
      letters.push(uppercaseAlphabetArr[uppercaseAlphabet[letter] + shift - 1]);
    } else if (uppercaseAlphabet[letter] + shift - 1 >= 27) {
      letters.push(
        uppercaseAlphabetArr[uppercaseAlphabet[letter] + ((shift - 1) % 25)]
      );
    }
  }
  return letters.join("");
  // Caesar needs your help!
}
// console.log(CaesarCryptoEncode("123,.)(!?", 10), "123,.)(!?");
// console.log(CaesarCryptoEncode("Et tu, Brute?", 3), "Hw wx, Euxwh?");
// console.log(CaesarCryptoEncode("Hw wx, Euxwh?", -3), "Et tu, Brute?");
console.log(
  CaesarCryptoEncode(
    `zaDd^m%@)Fv69!ueeu0B-'jj'LY&Y@>7=-"zHEt7a 8l?dv@L6 )e_"0H5Zto+35V0"WspYFt#N7k9`,
    37
  ),
  'kLoO^X%@)qg69!fPPf0m-\'UU\'wJ&J@>7=-"kspe7L 8W?Og@w6 )P_"0s5KeZ+35G0"HdaJqe#y7V9'
);
