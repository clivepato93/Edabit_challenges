// https://www.codewars.com/kata/58d76854024c72c3e20000de/train/javascript
function reverse(str) {
  //WRITE SOME MAGIC

  return /\w/.test(str)
    ? str
        .split(/\s/)
        .map((word, i) => (i % 2 ? [...word].reverse().join("") : word))
        .join(" ")
    : "";
}

console.log(
  reverse("Reverse this string, please!"),
  "Reverse siht string, !esaelp"
);
console.log(
  reverse("I really don't like reversing strings!"),
  "I yllaer don't ekil reversing !sgnirts"
);
