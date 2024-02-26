// https://www.codewars.com/kata/5970df092ef474680a0000c9/train/javascript

function alphabetized(s) {
  const arr = s.replace(/[^a-z]/gi, "").split("");
  return arr
    .sort((a, b) =>
      a.toLowerCase() > b.toLowerCase()
        ? 1
        : a.toLowerCase() == b.toLowerCase()
        ? 0
        : -1
    )
    .join("");
}

console.log(alphabetized("The Holy Bible"), "BbeehHilloTy");
