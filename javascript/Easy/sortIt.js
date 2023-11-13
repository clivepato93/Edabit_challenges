//https://www.codewars.com/kata/54eea36b7f914221eb000e2f/train/javascript

function sortIt(list, n) {
  //sort strings
  return list
    .split(", ")
    .sort((a, b) => {
      const [first, second] = [a[n - 1].toLowerCase(), b[n - 1].toLowerCase()];
      if (first === second) {
        return a < b ? -1 : 1;
      }
      return first < second ? -1 : 1;
    })
    .join(", ");
}

console.log(
  sortIt(
    "Helmut Rennenkampf, August Samuel Wahlen, Siegfried Kircheis, Adalbert von Fahrenheit, Oskar von Reuenthal, Ulrich Kesler, Anton Ferner, Hildegard von Mariendorf, Karl Gustav Kempf, Cornelius Lutz, Wolfgang Mittermeyer, Arthur von Streit, Ernst von Eisenach, Ernst von Eisenach, Reinhard von Lohengramm, Fritz Josef Bittenfeld",
    10
  ),
  " answer should be ",
  "Cornelius Lutz, Ernst von Eisenach, Ernst von Eisenach, Hildegard von Mariendorf, Oskar von Reuenthal, Siegfried Kircheis, Karl Gustav Kempf, Fritz Josef Bittenfeld, August Samuel Wahlen, Wolfgang Mittermeyer, Anton Ferner, Arthur von Streit, Helmut Rennenkampf, Ulrich Kesler, Adalbert von Fahrenheit, Reinhard von Lohengramm"
);

// console.log(
//   sortIt("Emil von Secla, Anton Ferner, Helmut Rennenkampf", 10),
//   " answer should be ",
//   "Anton Ferner, Helmut Rennenkampf, Emil von Secla"
// );
// console.log(
//   sortIt("bill, bell, ball, bull", 2),
//   "ball, bell, bill, bull",
//   "Sort by the second letter"
// );
// console.log(
//   sortIt("cat, dog, eel, bee", 3),
//   "bee, dog, eel, cat",
//   "Sort by the third letter"
// );
