// https://www.codewars.com/kata/55968ab32cf633c3f8000008/train/javascript

function initials(n) {
  const words = n
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1));

  words.map();
  return words.length < 2
    ? words.join(".")
    : words
        .slice(0, words.length - 1)
        .map((word) => word[0])
        .join(".") +
        "." +
        words[words.length - 1];
}

console.log(initials("code wars"), "C.Wars");
console.log(initials("Barack hussain obama"), "B.H.Obama");
console.log(initials("barack hussain Obama"), "B.H.Obama");
