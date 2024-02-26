// https://www.codewars.com/kata/5b097da6c3323ac067000036/train/javascript

function solve(a, b) {
  // HAPPY CODING!
  let alice = 0;
  let bob = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) alice++;
    else if (b[i] > a[i]) bob++;
  }
  if (alice > bob) return `${alice}, ${bob}: Alice made "Kurt" proud!`;
  if (alice < bob) return `${alice}, ${bob}: Bob made "Jeff" proud!`;
  return `${alice}, ${bob}: that looks like a "draw"! Rock on!`;
}

console.log(
  solve([47, 7, 2], [47, 7, 2]),
  '0, 0: that looks like a "draw"! Rock on!'
);
console.log(
  solve([47, 67, 22], [26, 47, 12]),
  '3, 0: Alice made "Kurt" proud!'
);
console.log(solve([25, 50, 22], [34, 49, 50]), '1, 2: Bob made "Jeff" proud!');
