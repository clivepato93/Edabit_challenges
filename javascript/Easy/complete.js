// https://www.codewars.com/kata/63967eb85e54bd00237d2201/train/javascript
// strings palindrome

const complete = (str) => {
  if (str.length == 1) return str + str;
  let newString = str;
  for (let i = 1; i < str.length; i++) {
    let newWord = newString + [...str.slice(0, i)].reverse().join("");
    let reverseWord = [...newWord].reverse().join("");
    if (newWord === reverseWord) {
      return reverseWord;
    }
  }
};

// console.log(complete("Baa"), "BaaB");

// console.log(complete("aaB"), "aaBaa");
// console.log(complete("x"), "xx");
// console.log(complete("aaBB"), "aaBBaa");
console.log(complete("aOOa"), "aOOaOOa");
// console.log(complete("xyz"), "xyzyx");
// console.log(complete("eEYyyyY"), "eEYyyyYEe");
// console.log(complete("AaaaA"), "AaaaAaaaA");
// console.log(complete("abab"), "ababa");
