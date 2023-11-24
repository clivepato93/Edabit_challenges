// https://www.codewars.com/kata/58305403aeb69a460b00019a/train/javascript

const newWord = (word) =>
  word
    .replace(/./g, (letter) =>
      letter === letter.toUpperCase()
        ? letter.toLowerCase()
        : letter.toUpperCase()
    )
    .split("")
    .reverse();

function reverseAndMirror(s1, s2) {
  const newS2 = newWord(s2).join("");
  //   console.log(newS2);
  const newS1 = newWord(s1);

  return newS2 + "@@@" + newS1.join("") + newS1.reverse().join("");
}

console.log(reverseAndMirror("FizZ", "buZZ"), "zzUB@@@zZIffIZz");
