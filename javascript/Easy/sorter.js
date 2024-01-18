// https://www.codewars.com/kata/5a07e5b7ffe75fd049000051/train/javascript
function sorter(textbooks) {
  function sorting(a, b) {
    const [c, d] = [a.toUpperCase(), b.toUpperCase()];
    for (let i = 0; i < Math.max(a.length, b.length); i++) {
      if (c[i] === undefined) return -1;
      if (d[i] === undefined) return 1;
      if (c[i].charCodeAt(0) > d[i].charCodeAt(0)) {
        return 1;
      }
      if (c[i].charCodeAt(0) < d[i].charCodeAt(0)) {
        return -1;
      }
    }
    return 0;
  }
  return textbooks.sort(sorting);
}

function sorter(Textbooks) {
  return Textbooks.sort((a, b) => (a.toLowerCase() > b.toLowerCase() ? 1 : -1));
}

console.log(sorter(["Algebra", "History", "Geometry", "English"]), [
  "Algebra",
  "English",
  "Geometry",
  "History",
]);

console.log(sorter(["Algebra", "history", "Geometry", "english"]), [
  "Algebra",
  "english",
  "Geometry",
  "history",
]);

console.log(sorter(["Alg#bra", "$istory", "Geom^try", "**english"]), [
  "$istory",
  "**english",
  "Alg#bra",
  "Geom^try",
]);
