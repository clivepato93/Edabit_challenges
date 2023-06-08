// https://www.codewars.com/kata/56576f82ab83ee8268000059/train/javascript

function spacey(array) {
  return array.map((word, i) =>
    i === 0 ? word : array.slice(0, i + 1).join("")
  );
}

console.log(spacey(["kevin", "has", "no", "space"]), [
  "kevin",
  "kevinhas",
  "kevinhasno",
  "kevinhasnospace",
]);
console.log(spacey(["this", "cheese", "has", "no", "holes"]), [
  "this",
  "thischeese",
  "thischeesehas",
  "thischeesehasno",
  "thischeesehasnoholes",
]);
