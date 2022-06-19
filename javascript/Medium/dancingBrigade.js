// https://www.codewars.com/kata/58539230879867a8cd00011c/train/javascript

function findChildren(dancingBrigade) {
  return [...dancingBrigade]
    .sort((a, b) =>
      a.toUpperCase() == b.toUpperCase()
        ? a.charCodeAt(0) - b.charCodeAt(0)
        : a.toUpperCase().charCodeAt(0) - b.toUpperCase().charCodeAt(0)
    )
    .join("");
}

console.log(findChildren("beeeEBb"), "BbbEeee");
