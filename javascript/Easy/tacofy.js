// https://www.codewars.com/kata/59414b46d040b7b8f7000021/train/javascript

function tacofy(word) {
  // Code here
  const taco = ["shell", "shell"];
  const ingredients = {
    vowelCheck: (letter) => {
      if (/[aeiou]/.test(letter)) return "beef";
      return false;
    },
    t: "tomato",

    l: "lettuce",

    c: "cheese",

    g: "guacamole",
    s: "salsa",
  };

  for (let i = 0; i < word.length; i++) {
    const element = word[i].toLowerCase();
    const result = ingredients.vowelCheck(element) || ingredients[element];
    if (result) taco.splice(taco.length - 1, 0, result);
  }

  return taco;
}

console.log(tacofy(""), ["shell", "shell"]);
console.log(tacofy("a"), ["shell", "beef", "shell"]);
console.log(tacofy("ggg"), [
  "shell",
  "guacamole",
  "guacamole",
  "guacamole",
  "shell",
]);
console.log(tacofy("ogl"), ["shell", "beef", "guacamole", "lettuce", "shell"]);
console.log(tacofy("ydjkpwqrzto"), ["shell", "tomato", "beef", "shell"]);
