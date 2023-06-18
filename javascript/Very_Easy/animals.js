// https://edabit.com/challenge/8Qg78sf5SNDEANKti
// algorithms
function animals(chickens, cows, pigs) {
  return chickens * 2 + cows * 4 + pigs * 4;
}

// https://www.codewars.com/kata/574c5075d27783851800169e/train/javascript

function animals(heads, legs) {
  //return [Chickens, Cows]
  const cows = legs / 2 - heads;
  //   const
  const chicken = heads - cows;
  if (
    Number.isInteger(cows) == false ||
    heads < 0 ||
    legs < 0 ||
    chicken < 0 ||
    cows < 0
  )
    return "No solutions";
  return [chicken, cows];
}

console.log(animals(72, 200), [44, 28]);
console.log(animals(116, 282), [91, 25]);
console.log(animals(12, 24), [12, 0]);
console.log(animals(6, 24), [0, 6]);
console.log(animals(344, 872), [252, 92]);
console.log(animals(158, 616), [8, 150]);

console.log(animals(25, 555), "No solutions");
console.log(animals(12, 25), "No solutions");
console.log(animals(54, 956), "No solutions");
console.log(animals(5455, 54956), "No solutions");

console.log(animals(0, 0), [0, 0]);
console.log(animals(-1, -1), "No solutions");
console.log(animals(-45, 5), "No solutions");
console.log(animals(500, 0), "No solutions");
console.log(animals(0, 500), "No solutions");
console.log(animals(5, -55), "No solutions");
