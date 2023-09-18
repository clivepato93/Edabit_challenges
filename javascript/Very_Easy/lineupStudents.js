// www.codewars.com/kata/5701800886306a876a001031/train/javascript

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
// localCompare
function lineupStudents(students) {
  return [...students.split(" ")].sort((a, b) =>
    a.length !== b.length ? b.length - a.length : b.localeCompare(a)
  );
}
//sum(a, b)
//     a.length !== b.length ? b.length - a.length : sum(a, b) ? -1 : 1

let s1 =
  "Tadashi Takahiro Takao Takashi Takayuki Takehiko Takeo Takeshi Takeshi";
let s2 = "Takahiro Takayuki ";
let lst1 = [
  "Takehiko",
  "Takayuki",
  "Takahiro",
  "Takeshi",
  "Takeshi",
  "Takashi",
  "Tadashi",
  "Takeo",
  "Takao",
];
let lst2 = ["Takayuki", "Takahiro"];
console.log(lineupStudents(s1), lst1);
