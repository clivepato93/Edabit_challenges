// https://www.codewars.com/kata/5202ef17a402dd033c000009/train/javascript

function titleCase(title, minorWords) {
  const words = minorWords
    ? minorWords.replace(/./g, (letter) => letter.toUpperCase()).split(/\s/)
    : null;
  const titleWords = title
    .replace(/./g, (letter) => letter.toUpperCase())
    .split(/\s/);
  console.log(words, titleWords);
  if (words) {
    for (let i = 0; i < titleWords.length; i++) {
      const word = titleWords[i];
      if (words.includes(word) && i > 0) {
        console.log(word);
        titleWords[i] = word.replace(/./g, (letter) => letter.toLowerCase());
        // console.log(titleWords);
        console.log(titleWords[i]);
      } else if (word.includes(word) && i == 0) {
        titleWords[i] = [...word]
          .map((letter, i) =>
            i == 0 ? letter.toUpperCase() : letter.toLowerCase()
          )
          .join("");
        // console.log(word);
      } else {
        console.log("in the else");
        titleWords[i] = [...word]
          .map((letter, i) =>
            i == 0 ? letter.toUpperCase() : letter.toLowerCase()
          )
          .join("");
      }
    }
  } else {
    // console.log("in the else");
    for (let i = 0; i < titleWords.length; i++) {
      const word = titleWords[i];
      titleWords[i] = [...word]
        .map((letter, i) =>
          i == 0 ? letter.toUpperCase() : letter.toLowerCase()
        )
        .join("");
    }
  }
  //   console.log(titleWords);
  return titleWords.join(" ");
}

// console.log(titleCase(""), "");
// console.log(titleCase("a clash of KINGS", "a an the of"), "A Clash of Kings");
// console.log(
//   titleCase("THE WIND IN THE WILLOWS", "The In"),
//   "The Wind in the Willows"
// );
// console.log(titleCase("the quick brown fox"), "The Quick Brown Fox");
console.log(titleCase("A bc", "bc"), "A bc");
