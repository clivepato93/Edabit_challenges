// https://www.codewars.com/kata/566efcfbf521a3cfd2000056/train/javascript

function flipNumber(n) {
  //Code goes here!

  let iteration = 0;
  while (iteration != n.length) {
    const word = [];
    for (let i = iteration; i < n.length; i++) {
      word.unshift(n[i]);
    }
    n = n.slice(0, iteration) + word.join("");
    iteration++;
  }
  return n;
}

console.log(flipNumber("012"), "201");
// console.log(flipNumber("012345"), "504132");
// console.log(flipNumber("0123456789"), "9081726354");
