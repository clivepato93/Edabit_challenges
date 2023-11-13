// https://www.codewars.com/kata/57ab2d6072292dbf7c000039/train/javascript

// string
function correctPolishLetters(string) {
  const obj = {
    ą: "a",
    ć: "c",
    ę: "e",
    ł: "l",
    ń: "n",
    ó: "o",
    ś: "s",
    ź: "z",
    ż: "z",
  };

  return [...string]
    .map((letter) => (obj.hasOwnProperty(letter) ? obj[letter] : letter))
    .join("");
}

console.log(correctPolishLetters("Jędrzej Błądziński"), "Jedrzej Bladzinski");
// console.log(correctPolishLetters("Lech Wałęsa"), "Lech Walesa");
// console.log(
//   correctPolishLetters("Maria Skłodowska-Curie"),
//   "Maria Sklodowska-Curie"
// );
