// https://www.codewars.com/kata/630647be37f67000363dff04/train/javascript

// Permutations
//first solution
// const draw = (deck) => {
//   const drawnCards = [];
//   const rounds = deck.length;
//   for (let index = 0; index < rounds; index++) {
//     const x = deck.shift();
//     // console.log(x);

//     drawnCards.push(x);

//     const shuffleCard = deck.shift();
//     deck.push(shuffleCard);
//     console.log(`the deck is ${deck}`, `the drawn cards are ${drawnCards}`);
//   }
//   return drawnCards;
// };

//Recursion solution
const draw = (deck, drawnCards = []) => {
  if (!deck.length) {
    return deck;
  }
  console.log(deck);

  const x = deck.shift();
  // console.log(x);

  drawnCards.push(x);

  if (!deck.length) {
    return drawnCards;
  }
  const shuffleCard = deck.shift();
  deck.push(shuffleCard);
  console.log(`the deck is ${deck}`, `the drawn cards are ${drawnCards}`);
  return draw(deck, drawnCards);
};

console.log(draw(["KC", "KH", "QC", "KS", "KD", "QH", "QD", "QS"]), [
  "KC",
  "QC",
  "KD",
  "QD",
  "KH",
  "QH",
  "KS",
  "QS",
]);
