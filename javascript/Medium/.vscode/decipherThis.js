// https://www.codewars.com/kata/581e014b55f2c52bb00000f8/train/javascript

function decipherThis(str) {
  //have fun!
  const words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    const match = words[i].match(/^\d+/g)[0];
    words[i] = String.fromCharCode(+match) + words[i].slice(match.length);

    if (words[i].length > 2) {
      [second, last] = [words[i][words[i].length - 1], words[i][1]];
      console.log(second, last);
      words[i] =
        words[i][0] + second + words[i].slice(2, words[i].length - 1) + last;
    }
  }
  return words.join(" ");
}

console.log(
  decipherThis("72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o"),
  "Have a go at this and see how you do"
);
