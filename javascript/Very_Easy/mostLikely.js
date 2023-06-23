// https://www.codewars.com/kata/56644a421b7c94c622000056/train/javascript

function mostLikely(prob1, prob2) {
  // your code

  const newProb1 = eval(prob1.replace(":", "/"));
  const newProb2 = eval(prob2.replace(":", "/"));

  return newProb1 > newProb2;
}

console.log(mostLikely("1:3", "1:2"), false);

console.log(mostLikely("1:2", "1:3"), true);
