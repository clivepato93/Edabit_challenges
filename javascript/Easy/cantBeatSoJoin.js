// https://www.codewars.com/kata/5d37899a3b34c6002df273ee/train/javascript

function cantBeatSoJoin(numbers) {
  // your code here
  const arr = numbers.sort(
    (a, b) => b.reduce((t, c) => t + c, 0) - a.reduce((t, c) => t + c, 0)
  );
  return arr.flat();
}
