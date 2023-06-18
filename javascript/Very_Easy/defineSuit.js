//https://www.codewars.com/kata/5a360620f28b82a711000047/train/javascript
// Strings

function defineSuit(card) {
  // good luck"
  return { "♣": "clubs", "♦": "diamonds", "♥": "hearts", "♠": "spades" }[
    card[card.length - 1]
  ];
}
