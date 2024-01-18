// codewars.com/kata/5acbc3b3481ebb23a400007d/train/javascript

function isFlush(cards) {
  for (let i = cards.length - 1; i > 0; i--) {
    const curr = cards[i];
    const next = cards[i - 1];
    if (curr[curr.length - 1] != next[next.length - 1]) return false;
  }
  return true;
}

console.log(isFlush(["AS", "3S", "9S", "KS", "4S"]), true);
console.log(isFlush(["AD", "4S", "7H", "KC", "5S"]), false);
console.log(isFlush(["AD", "4S", "10H", "KC", "5S"]), false);
console.log(isFlush(["QD", "4D", "10D", "KD", "5D"]), true);
console.log(isFlush(["10D", "4D", "QD", "KD", "5D"]), true);
